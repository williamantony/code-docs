const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  userAuthentication,
} = require('../controllers/index.js');

const User = require('../../database/user.model.js');
const Documentation = require('../../database/documentation.model.js');

const {
  SUCCESS,
  CREATED,
  USER_ERROR,
  SERVER_ERROR,
} = require('../status.codes.js');

const { 
  SECRET,
  SESSION_EXPIRATION,
} = require('../keys.js');

module.exports = (server) => {

  server.post('/api/users/signup', (req, res) => {

    const { email, password } = req.body;

    bcrypt
      .hash(password, 10)
      .then(passwordhash => {

        new User({
            email,
            password: passwordhash,
          })
          .save()
          .then(response => {
                        
            res.status(CREATED);
            res.json({
              success: true,
              user: response,
            });
            
          })
          .catch(error => console.log(error));

      })
      .catch(error => console.log(error));
      
  });

  server.post('/api/users/signin', (req, res) => {

    const { email, password } = req.body;

    User
      .findOne({ email })
      .then(user => {
        
        if (user) {

          const id = user._id;
          const passwordhash = user.password;

          // compare user-provided password with hash in DB
          bcrypt
            .compare(password, passwordhash)
            .then(passwordMatch => {

              if (passwordMatch) {

                // JSONWebToken
                jwt.sign({ id }, SECRET, { expiresIn: SESSION_EXPIRATION }, (error, token) => {
                  if (error) {
                    res.status(SERVER_ERROR);
                    res.json({ error });
                  } else {
                    res.status(CREATED);
                    res.json({ token });
                  }
                });

              } else {

                // password did not match passwordHash
                res.status(USER_ERROR);
                res.json({
                  error: 'Invalid email/password combination'
                });

              }

            })
            .catch(error => console.log(error));
        
        } else {

          // User not found in DB
          res.status(USER_ERROR);
          res.json({
            error: 'Invalid email/password combination'
          });

        }

      })
      .catch(error => console.log(error));

  });
  
  server.post('/api/users/authorize', userAuthentication, (req, res) => {
    
    console.log(req.body.authorizedUser);

    res.status(SUCCESS);
    res.json({ authorized: true });

  });
  
};
