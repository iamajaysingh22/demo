const mongodb = require("mongoose");
const winston = require("winston");
module.exports = function dbConnection() {
  mongodb.set("useNewUrlParser", true);
  mongodb.set("useUnifiedTopology", true);
  mongodb
    .connect("mongodb://localhost:27017/db-ngtask-dev")
    .then(() => {
      winston.info("connected with mongodb....");
    })
    .catch((err) => winston.error("could not connect with mongodb", err));
};
