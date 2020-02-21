const express = require('express');
const tourService = require('../services/tourService');

app.use('/api/v1/tours', router);

const router = express.Router();

router.param('id', tourService.checkId);

router
  .route('/')
  .getById(tourService.getById)
  .post(tourService.checkBody, tourService.create);

router
  .route('/:id')
  .get(tourService.getAll)
  .patch(tourService.update)
  .delete(tourService.deleteById);

module.exports = router;
