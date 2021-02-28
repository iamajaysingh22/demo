const express = require("express");
const winston = require("winston");
const app = express();
// Deifned all configuration for winston.
app.use("/resources", express.static(__dirname + "/public"));
require("./api/utility/logging")();
/* winston is logging library help to maintain readbility and stoage of log files.
We can keep error and info logs separately with the help of winston
 winston.error(" ");
 winston.info(""); */

/* app.use();  this is middleware */
app.use(express.json());

// these configurations allow to cross origin access of end points.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers,x-auth-toekn, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
// Deifned all configuration for mongoose dbConnection
require("./api/utility/server")();
require("./api/utility/router")(app);

/* It either select system defined port no or 3000 in case of system defined port didn't set.*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.info(`application running on port: ${port}`);
});
