const Documentation = require('../../database/documentation.model');

const {
  userAuthentication,
} = require('../controllers/index.js');

const {
  SUCCESS,
  CREATED,
  USER_ERROR,
  SERVER_ERROR,
} = require('../status.codes.js');

module.exports = (server) => {

  server.post('/api/documentations', userAuthentication, (req, res) => {
    
    const { title, url, authorizedUser } = req.body;

    new Documentation({
      title,
      url,
      ownedBy: authorizedUser,
    }).save()
      .then((response) => {
        res.status(CREATED);
        res.json({ response });
      }) 
      .catch((error) => {
        res.status(USER_ERROR);
        res.json({ error });
      });

  });

  server.get('/api/documentations', userAuthentication, (req, res) => {
    
    const { authorizedUser } = req.body;

    Documentation
      .find({ ownedBy: authorizedUser })
      .then((response) => {
        res.status(SUCCESS);
        res.json({ response });
      })
      .catch((error) => {
        res.status(USER_ERROR);
        res.json({ error });
      });
    
  });

};
