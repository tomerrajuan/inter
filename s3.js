const aws = require("aws-sdk");
const fs = require("fs");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("./secrets"); // in dev they are in secrets.json which is listed in .gitignore
}

const s3 = new aws.S3({
    accessKeyId: secrets.awsKey,
    secretAccessKey: secrets.awsSecret
});

exports.upload = function(req, res, next) {
    console.log("req is: ", req.file);

    if(!req.file){
        console.log("no req.file");
        return res.sendStatus(200);
    }
    const { filename, mimetype, size, path } = req.file;

    s3.putObject({
        Bucket: "interopa",
        ACL: "public-read",
        Key: filename,
        Body: fs.createReadStream(path),
        ContentType: mimetype,
        ContentLength: size
    })
        .promise()
        .then(() => {
            next();
            fs.unlink(path, () => {});
        })
        .catch(err => {
            console.log("error at s3 is: ", err);
            res.sendStatus(500);
        });
};
