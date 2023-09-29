const express = require('express');
const pool = require('../database/database.js');
const {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../queries/users');
const usersController = express.Router();

usersController.get('/', async (request, response) => {
  const allUsers = await getAllUsers();
  //console.log(allGames);
  if (allUsers) {
    response.status(200).json({
      success: true,
      payload: allUsers,
    });
  } else {
    console.log('Something broke');
    response.status(500).json();
  }
});
usersController.get('/:id', async (request, response) => {
  const { id } = request.params;
  const user = await getAUser(id);
  if (user.id) {
    response.status(200).json({
      success: true,
      payload: user,
    });
  } else {
    response.status(404).json({
      success: false,
      id: id,
      payload: `A user with the id of:${id} does not exist.`,
    });
  }
});

usersController.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser) {
    if (deletedUser.id) {
      response.status(200).json({
        success: true,
        payload: deletedUser,
      });
    } else {
      response.status(404).json({
        success: false,
        payload: deletedUser,
      });
    }
  }
});

usersController.post('/', async (req, res) => {
  try {
    const user = await createUser(request.body);
    response.json({
      success: true,
      payload: user,
    });
  } catch (error) {
    return error;
  }
  // const name = req.body['name'];
  // const photo = req.body['photo'];
  // const password = req.body['password'];
  // const email = req.body['email'];
  // const age = req.body['age'];
  // console.log('Username:' + name);
  // console.log('Password:' + password);
  // console.log('Email:' + email);
  // console.log('Age:' + age);
  // const insertSTMT = `INSERT INTO users (name, photo, password, email, age) VALUES ('${name}','${photo}', '${password}', '${email}', '${age}');`;
  // pool
  //   .query(insertSTMT)
  //   .then((response) => {
  //     console.log('Data saved');
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // console.log(req.body);
  // res.send('Msg received' + req.body);
});

usersController.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const user = await updateUser(id, request.body);
    response.json({
      success: true,
      payload: user,
    });
  } catch (error) {
    return error;
  }
});

module.exports = usersController;
