import morgan from 'morgan';
import express from 'express';
import tourRouter from './controllers/tourController';
import userRouter from './controllers/userController';
const app = express();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;
