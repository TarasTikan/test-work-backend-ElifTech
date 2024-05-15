const Joi = require("joi");
const addShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const addShemaAuth = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
module.exports = { addShema, addShemaAuth };