const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side');
});

app.listen(port, () => {});
