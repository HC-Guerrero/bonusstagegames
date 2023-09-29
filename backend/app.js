// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const videogamesController = require('./controllers/videogamesController');
const usersController = require('./controllers/usersController');
const pool = require('./database/database.js');
// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());

// app.set('view engine', 'ejs');

// ROUTES
app.get('/', async (request, response) => {
  // res.render('home.ejs', { user: 'Tester' });
  response.status(200).send('Welcome to Bonus Stage Games'); //TODO: show possible routes in response message
});
app.use('/videogames', videogamesController);
app.use('/users', usersController);
app.use('/dashboard', require('./controllers/dashboard'));
app.use('/auth', require('./controllers/jwtAuth'));

// app.get('/addusers', (req, res) => {
//   const name = req.body['name'];
//   const photo = req.body['photo'];
//   const password = req.body['password'];
//   const email = req.body['email'];
//   const age = req.body['age'];

//   console.log('Username:' + name);
//   console.log('Password:' + password);
//   console.log('Email:' + email);
//   console.log('Age:' + age);
//   const insertSTMT = `INSERT INTO users (name,photo, password, email, age) VALUES ('${name}','${photo}', '${password}', '${email}', '${age}');`;
//   pool
//     .query(insertSTMT)
//     .then((response) => {
//       console.log('Data saved');
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   console.log(req.body);
//   res.send('Msg received' + req.body);
// });

// app.get('/users/register', (req, res) => {
//   res.render('register.ejs');
// });
// app.get('/users/login', (req, res) => {
//   res.render('login.ejs');
// });
// app.get('/users/dashboard', (req, res) => {
//   res.render('dashboard.ejs', { user: 'Tester' });
// });

app.get('*', (request, response) => {
  response.status(404).send('Route error.');
});
// EXPORT
module.exports = app;
