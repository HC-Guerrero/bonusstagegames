const router = require('express').Router();
const pool = require('../database/database.js');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validinfo.js');
const authorization = require('../middleware/authorization');
//registering
router.post('/register', validInfo, async (req, res) => {
  try {
    const { name, photo, email, address, age, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).send('User already registered');
    }

    //encryption for passwords
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users (name, photo, email, address, age, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * `,
      [name, photo, email, address, age, bcryptPassword],
    );
    // res.json(newUser.rows[0]);
    //^Commented, this also causes a header to be sent when the body has already been written
    const token = jwtGenerator(newUser.rows[0].id);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//login
router.post('/login', validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json('Password or Email not found.');
    }

    // const token = jwtGenerator(user.rows[0].id);
    // res.json({ token });
    //^Move this within the if statement for password validation Line 61 - 62, it causes a header to send after the body has data causing a crash
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    console.log(validPassword);
    if (!validPassword) {
      return res.status(401).json('Incorrect Password or Email');
    }
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/verify', authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
