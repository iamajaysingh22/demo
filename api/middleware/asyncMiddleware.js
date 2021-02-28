module.exports = function asyncMiddeware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (e) {
      //   here we're giving the control to the error handler middleware to catch error
      next(e);
    }
  };
};
