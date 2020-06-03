const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = express();

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

const { s3Url } = require("../config");
const uidSafe = require("uid-safe");
const db = require("../react-ui/utils/db");

const s3 = require("../s3");
const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, __dirname + "/uploads");
  },
  filename: function(req, file, callback) {
      uidSafe(24).then(function(uid) {
          callback(null, uid + path.extname(file.originalname));
      });
  }
});
const uploader = multer({
  storage: diskStorage,
  limits: {
      fileSize: 8097150
  }
});
// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });
} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  app.use(express.json());

  // app.post('/upload', function (req, res) {
  //   res.set('Content-Type', 'application/json');
  //   res.send('{"message":"Hello from upload"}');
  // });


  app.post("/upload", uploader.single(`file`), s3.upload, (req, res) => {
    console.log("we are at  upload at server", req)

    const url = `${s3Url}${req.file.filename}`;
    db.addImage(url)
        .then(( {rows} ) => {
            console.log("returning from upload: ",rows)
            res.json({
                image: rows[0].url
            });
        })
        .catch(err => console.log("error at uploading: ", err));
});


app.get("/images", (req, res) => {
  console.log("we are at images");

  db.getImages()
      .then(results => {
          let images = results.rows;
          res.json(images);
      })
      .catch(err => {
          res.json(false);
          console.log("error at getting a comment: ", err);
      });
});

app.get("/moreImages/:id", (req, res) => {
  console.log("we are at get more images");
  let id = req.params.id;
  console.log("id is", id);

  Promise.all([db.getMoreImages(id), db.getFirstImageId()])
      .then(results => {
          console.log("results are", results[0].rows);
          console.log("results 1 are", results[1].rows);

          res.json({
              image: results[0].rows,
              firstId: results[1].rows
          });
      })
      .catch(err => {
          console.log("error at hashedPasswordsend", err);
      });
});

  app.post('/', function(req, res){
    console.log('test');
    res.end(); // end the response
});

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}
