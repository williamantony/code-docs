const Documentation = require('../../database/documentation.model');

const {
  userAuthentication,
} = require('../controllers/index.js');

module.exports = (server) => {

  server.post('/api/documentations', userAuthentication, (req, res) => {
    
    const { title, url, authorizedUser } = req.body;

    new Documentation({
      title,
      url,
      ownedBy: authorizedUser,
    }).save()
      .then((response) => {
        res.status(STATUS.CREATED);
        res.json({ response });
      }) 
      .catch((error) => {
        res.status(STATUS.USER_ERROR);
        res.json({ error });
      });

  });

  server.get('/api/documentations', userAuthentication, (req, res) => {
    
    const { authorizedUser } = req.body;

    Documentation
      .find({ ownedBy: authorizedUser })
      .then((response) => {
        res.status(STATUS.SUCCESS);
        res.json({ response });
      })
      .catch((error) => {
        res.status(STATUS.USER_ERROR);
        res.json({ error });
      });
    
  });

};
