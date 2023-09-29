const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'bonus_stage_games',
});

// const createTblQry = `CREATE TABLE users (users_id serial PRIMARY KEY,
//     name VARCHAR( 100 ) UNIQUE NOT NULL,
// email VARCHAR( 100 ) UNIQUE NOT NULL,
// age VARCHAR (3) UNIQUE NOT NULL,
// password VARCHAR( 100 ) UNIQUE NOT NULL);`;

// pool
//   .query(createTblQry)
//   .then((Response) => {
//     console.log('Database Created');
//     console.log(Response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = pool;
