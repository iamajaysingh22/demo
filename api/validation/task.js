const joi = require("joi");
module.exports = function validateTask(task) {
  const obj = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
  });
  return obj.validate(task);
};
