const _ = require('lodash');

module.exports = (req, res, next) => {
  // Check if any data is provided
  if (_.isEmpty(req.body) && _.isEmpty(req.query)) {
    return res.status(400).send({
      msg: 'Please provide at least one value'
    })
  } else {
    const data = _.isEmpty(req.body) ? req.query : req.body;
    
    // Set data to request object
    req.npc_data = data;

    next();
  }
};
