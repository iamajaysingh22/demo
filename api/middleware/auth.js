const jwt = require("jsonwebtoken");
module.exports = function name(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send("Access denied.No token provided");
  try {
    let decoded = jwt.verify(token, "ng-task-dev");
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(400).send("Invalid Token");
  }
};
