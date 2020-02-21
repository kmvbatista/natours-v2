const express = require('express');
const morgan = require('morgan');
import tourRouter from './controllers/tourControllers';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
