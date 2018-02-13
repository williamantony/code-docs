const {
  userAuthentication,
} = require('../controllers/index.js');;

module.exports = (server) => {

  server.post('/api/docs', userAuthentication, (req, res) => {
    
    const { title, url } = req.body;

    new Documentation({
      title,
      url,
      owner,
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

  server.get('/api/docs', userAuthentication, (req, res) => {
    
    Documentation
      .find({})
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