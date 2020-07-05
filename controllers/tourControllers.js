const express = require('express');
const tourService = require('../services/tourService');
const router = express.Router();

router.param('id', tourService.checkId);

router
  .route('/')
  .get(tourService.getAll)
  .post(tourService.checkBody, tourService.create);

router
  .route('/:id')
  .get(tourService.getById)
  .patch(tourService.update)
  .delete(tourService.deleteById);

module.exports = router;
