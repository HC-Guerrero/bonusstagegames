const db = require('../database/dbConfig.js');

const getAllVideoGames = async () => {
  try {
    const allVideoGames = await db.any('SELECT * FROM videogames');
    return allVideoGames;
  } catch (error) {
    return error;
  }
};

const getAVideoGame = async (id) => {
  try {
    const videoGame = await db.one(
      `SELECT * FROM videogames WHERE id = ${id} `,
    );
    return videoGame;
  } catch (error) {
    return error;
  }
};
const createAVideoGame = async (videoGame) => {
  try {
    let { name, genre, platforms, esrb_rating, release_date, price, about } =
      videoGame;
    return await db.one(
      `INSERT INTO videogames (name, genre, platforms, esrb_rating, release_date, price, about) 
        VALUES ('${name}','${genre}', '${platforms}', '${esrb_rating}', '${release_date}', '${price}', '${about}',) RETURNING *`,
      [name, genre, platforms, esrb_rating, release_date, price, about],
    );
  } catch (error) {
    return error;
  }
};
const deleteAVideoGame = async (id) => {
  try {
    return await db.one(
      `DELETE FROM videogames WHERE id='${id}' RETURNING *`,
      id,
    );
  } catch (error) {
    return error;
  }
};
const updateAVideoGame = async (
  id,
  { name, genre, platforms, esrb_rating, release_date, price, about },
) => {
  try {
    return await db.one(
      `UPDATE videogames SET name ='${name}', genre ='${genre}', platforms='${platforms}', esrb_rating='${esrb_rating}',release_date='${release_date}', price='${price}',about='${about}'WHERE id = '${id}' RETURNING *`,
      [name, genre, platforms, esrb_rating, release_date, price, about],
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllVideoGames,
  getAVideoGame,
  createAVideoGame,
  deleteAVideoGame,
  updateAVideoGame,
};
