const tourService = require('../handlers/tourHandler');
const router = require('../configs/router.js');

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
