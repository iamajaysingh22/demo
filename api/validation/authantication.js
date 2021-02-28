const joi = require("joi");

module.exports = function validateAuth(auth) {
  const obj = joi.object({
    emailId: joi.string().required(),
    password: joi.string().required(),
  });

  return obj.validate(auth);
};
