import * as tourHandler from '../handlers/tourHandler';
import router from '../configs/router';

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

export default router;
