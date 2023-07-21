// DEPENDENCIES
const app = require('./app.js');
const cors = require('cors');
// CONFIGURATION
require('dotenv').config();

const PORT = process.env.PORT;

// LISTEN
app.use(cors());
app.listen(PORT, () => {
  console.log(`Bonus Stage Reached At ${PORT}!`);
});
