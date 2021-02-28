const Joi = require("joi");

module.exports = function validation(user) {
  const schema = Joi.object({
    name: Joi.string(),
    emailId: Joi.string().email().required(),
    password: Joi.string().min(8).max(225),
  });
  return schema.validate(user);
};
