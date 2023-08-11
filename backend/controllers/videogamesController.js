const express = require('express');
const {
  getAllVideoGames,
  getAVideoGame,
  createAVideoGame,
  deleteAVideoGame,
  updateAVideoGame,
} = require('../queries/videogames');
const videogamesController = express.Router();

videogamesController.get('/', async (request, response) => {
  const allGames = await getAllVideoGames();
  //console.log(allGames);
  if (allGames) {
    response.status(200).json({
      success: true,
      payload: allGames,
    });
  } else {
    console.log('Something broke');
    response.status(500).json();
  }
});

videogamesController.get('/:id', async (request, response) => {
  const { id } = request.params;
  const videoGame = await getAVideoGame(id);
  if (videoGame.id) {
    response.status(200).json({
      success: true,
      payload: videoGame,
    });
  } else {
    response.status(404).json({
      success: false,
      id: id,
      payload: `A game with the id of:${id} is not available at this time.`,
    });
  }
});

videogamesController.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const gameToDelete = await deleteAVideoGame(id);
  if (gameToDelete) {
    if (gameToDelete.id) {
      response.status(200).json({
        success: true,
        payload: gameToDelete,
      });
    } else {
      response.status(500).json({
        success: false,
        payload: 'Unable to delete game of id:' + gameToDelete,
      });
    }
  }
});

videogamesController.post('/', async (request, response) => {
  try {
    const videoGame = await createAVideoGame(request.body);
    response.json({
      success: true,
      payload: 'We have a new game listed!' + videoGame,
    });
  } catch (error) {
    return error;
  }
});

videogamesController.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const aGame = await updateAVideoGame(id, request.body);
    response.json({
      success: true,
      payload: aGame,
    });
  } catch (error) {
    return error;
  }
});
module.exports = videogamesController;
