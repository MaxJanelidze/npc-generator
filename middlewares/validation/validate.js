const Joi = require('joi');

/*
  User input validation
*/

module.exports.npc = {
  validateBody: schema => {
    return (req, res, next) => {

      // Validate body
      const result = Joi.validate(req.body, schema);
      
      if (result.error) {
        const errors = result.error.details.map(item => item.message)
        return res.status(400).send({msg: errors});
      }

      if (!req.value) {
        req.value = {};
      }

      req.value['body'] = result.value;
      next();
    };
  },

  // Log in validation schema
  schemas: {
    npcSchema: Joi.object().keys({
      race: Joi.string().optional(),
      biography: Joi.string().optional(),
      height: Joi.string().optional(),
      weight: Joi.string().optional(),
      eyesColor: Joi.string().optional(),
      hairColor: Joi.string().optional(),
      skinColor: Joi.string().optional(),
      bodyType: Joi.string().optional(),
      gender: Joi.string().optional()
    })
  }
};
