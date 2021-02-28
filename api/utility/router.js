const express = require("express");
const product = require("../routes/product");
const test = require("../routes/test.js");
const user = require("../routes/user");
const task = require("../routes/task");
const authantication = require("../routes/authantication");
const errorHandling = require("../middleware/errorHandling");

module.exports = function (app) {
  console.log("hello step 1");
  app.use("/api", test);
  app.use("/api/register", user);
  app.use("/api/signin", authantication);
  app.use("/api/task", task);

  //app.use("/api/product", product);

  // app.use("/api/auth", authantication);
  /* This is the special error middleware function provided by the express
  Whenever Error occured in code,  First error catch by catch block. Then from there It will handover to this middleware function.
  Advantage of this step;
  We don't need to write error message in each and every catch block. we can avoid this repeatedly process.
   Important:- 
   1) Always declare this middleware after all the routes.
   2) In catch block pass the control to error middleware by next(); function
   */
  app.use(errorHandling);
};
