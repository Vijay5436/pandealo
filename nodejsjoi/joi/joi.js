const Joi = require('joi');

const joischema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

  repeat_password: Joi.ref('password'),

  emailid: Joi.string()
    .email().required(),
});

module.exports = { joischema };
