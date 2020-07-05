const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const port = 3000;
app.listen(port, () => {
  console.log('rodando');
});
