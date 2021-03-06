import tourHandler from './handlers/tourHandler';
import router from './../../../router.js';

router.param('id', tourHandler.checkId);

router
  .route('/')
  .get(tourHandler.getAll)
  .post(tourHandler.checkBody, tourHandler.create);

router
  .route('/:id')
  .get(tourHandler.getById)
  .patch(tourHandler.update)
  .delete(tourHandler.deleteById);

module.exports = router;
