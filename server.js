const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DbUrl = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

console.log(DbUrl);

mongoose
  .connect(DbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => console.log('Db connected'));

const tourSchema = new mongoose.Schema({
  name: { type: String, required: [true] },
  rating: { type: Number, unique: true },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
});

const Tour = mongoose.model('Tour');

const port = 3000;
app.listen(port, () => {
  console.log('rodando');
});
