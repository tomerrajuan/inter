const spicedPg = require("spiced-pg");
const db = spicedPg(process.env.DATABASE_URL);
const bcrypt = require("bcryptjs");
const { promisify } = require("util");
const hash = promisify(bcrypt.hash);
const genSalt = promisify(bcrypt.genSalt);

exports.hash = password => genSalt().then(salt => hash(password, salt));
exports.compare = promisify(bcrypt.compare);


exports.addImage = function(url) {
    console.log("adding an image");
    return db.query(
        "INSERT INTO movies (url) VALUES ($1) RETURNING *",
        [url]
    );
};

exports.getImages = function() {
    console.log("selecting all from images");
    return db.query("SELECT * FROM movies ORDER BY created_at DESC LIMIT 12");
};

exports.getMoreImages = function(lastId) {
    console.log("last id", lastId);
    return db.query(
        `SELECT * FROM movies
        WHERE id < $1
        ORDER BY created_at DESC LIMIT 12`,
        [lastId]
    );
};
exports.getFirstImageId = function() {
    console.log("last id");
    return db.query(
        `SELECT id FROM movies
ORDER BY id ASC
LIMIT 1`
    );
};