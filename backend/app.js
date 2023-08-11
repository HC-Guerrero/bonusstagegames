// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const videogamesController = require('./controllers/videogamesController');
const usersController = require('./controllers/usersController');
// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.get('/', async (request, response) => {
  response.status(200).send('Welcome to Bonus Stage Games'); //TODO: show possible routes in response message
});
app.use('/videogames', videogamesController);
app.use('/users', usersController);

app.get('*', (request, response) => {
  response.status(404).send('Route error.');
});
// EXPORT
module.exports = app;
