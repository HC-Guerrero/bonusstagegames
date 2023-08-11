const db = require('../database/dbConfig.js');

const getAllUsers = async () => {
  try {
    const allUsers = await db.any('SELECT * FROM users');
    return allUsers;
  } catch (error) {
    return error;
  }
};
const getAUser = async (id) => {
  try {
    const user = await db.one(`SELECT * FROM users WHERE id = ${id}`);
    return user;
  } catch (error) {
    return error;
  }
};
const createUser = async (user) => {
  try {
    let {
      name,
      photo,
      email,
      address,
      age,
      enrollment_date,
      membership,
      payment_info,
    } = user;
    return await db.one(
      `INSERT INTO users(name, photo, email, address, age, enrollment_date, membership, payment_info) VALUES
    ('${name}','${photo}','${email}','${address}','${age}','${enrollment_date}','${membership}','${payment_info}' )RETURNING *`,
      [
        name,
        photo,
        email,
        address,
        age,
        enrollment_date,
        membership,
        payment_info,
      ],
    );
  } catch (error) {
    return error;
  }
};

const updateUser = async (
  id,
  {
    name,
    photo,
    email,
    address,
    age,
    enrollment_date,
    membership,
    payment_info,
  },
) => {
  try {
    return await db.one(
      `UPDATE users SET name='${name}', photo='${photo}', email='${email}', address='${address}', age='${age}', enrollment_date='${enrollment_date}', membership='${membership}', payment_info='${payment_info}'WHERE id ='${id}' RETURNING * `,
      [
        name,
        photo,
        email,
        address,
        age,
        enrollment_date,
        membership,
        payment_info,
      ],
    );
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    return await db.one(`DELETE FROM users WHERE id='${id}' RETURNING *`, id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
};
