module.exports = function ErrorHandler(err, req, res, next) {
  return res.status(500).send("Something failed!!!" + err);
};
