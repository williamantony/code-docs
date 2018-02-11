const mongoose = require('mongoose');
const {
  SERVER_ERROR
} = require('../status.codes.js');

const connectDatabase = (req, res, next) => {

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/code-docs')
    .then((response) => next())
    .catch((error) => {
      res.status(SERVER_ERROR);
      res.json({ error });
    });

};

module.exports = {
  connectDatabase,
};
