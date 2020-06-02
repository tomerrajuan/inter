const spicedPg = require("spiced-pg");
const db = spicedPg("postgres:postgres:postgres@localhost:8080/inter");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");
const hash = promisify(bcrypt.hash);
const genSalt = promisify(bcrypt.genSalt);

exports.hash = password => genSalt().then(salt => hash(password, salt));
exports.compare = promisify(bcrypt.compare);


exports.addImage = function(url) {
    console.log("adding an image");
    return db.query(
        "INSERT INTO images (url) VALUES ($1) RETURNING *",
        [url]
    );
};

