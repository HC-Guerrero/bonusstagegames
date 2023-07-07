const express = require('express');
const {
  getAllVideoGames,
  getAVideoGame,
  createAVideoGame,
  deleteAVideoGame,
  updateAVideoGame,
} = require('../queries/videogames');
const videogamesController = express();

videogamesController.get('/', async (request, response) => {
  const allGames = await getAllVideoGames();
  console.log(allGames);
  if (allGames[0]) {
    response.status(200).json({
      success: true,
      payload: allGames,
    });
  } else {
    console.log('Something broke');
    response.status(500).json();
  }
});
module.exports = videogamesController;
