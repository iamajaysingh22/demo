const winston = require("winston");
const { combine, timestamp, label, prettyPrint } = winston.format;
module.exports = function () {
  const logger = winston.createLogger({
    exceptionHandlers: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "exceptions.log" }),
    ],
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "info.log", level: "info" }),
    ],
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
    format: combine(label({ label: "ngocean" }), timestamp(), prettyPrint()),
  });
  /* It throws exception which not handled, which is eventually catch by uncaught exception block*/
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
  winston.add(logger);
};
