const PORT = 5000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = {
  users: require('./routes/users.routes.js'),
  documentations: require('./routes/documentations.routes.js'),
};

const {
  connectDatabase,
} = require('./middlewares');

const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(cors());
server.use(connectDatabase);

// Routes
// User/Auth Routes
routes.users(server);
// Documentations Routes
routes.documentations(server);

server.listen(PORT, () => {
  console.log(`Express Server is running on http://localhost:${ PORT }`);
});
