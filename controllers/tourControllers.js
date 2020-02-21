const express = require('express');
const tourService = require('../services/tourService');

app.use('/api/v1/tours', router);

const router = express.Router();

router
  .route('/')
  .getById(tourService.getById)
  .post(tourService.getById);

router
  .route('/:id')
  .get(tourService.getAll)
  .patch(tourService.update)
  .delete(tourService.deleteById);

module.exports = router;
