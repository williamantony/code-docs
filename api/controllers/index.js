const jwt = require('jsonwebtoken');
const User = require('../../database/user.model.js');
const { SECRET } = require('../keys.js');
const {
  SUCCESS,
  UNAUTHORIZED,
} = require('../status.codes.js');

const userAuthentication = (req, res, next) => {

  const { authorization } = req.headers;
  
  jwt.verify(authorization, SECRET, (error, decoded) => {

    const authorized = (decoded !== undefined);
    
    if (!authorized) {

      res.status(UNAUTHORIZED);
      res.json({ 
        authorized,
        error: 'User not logged in'
      });

    } else {

      req.body.authorizedUser = decoded.id;
      next();

    }

  });

};

module.exports = {
  userAuthentication
};
