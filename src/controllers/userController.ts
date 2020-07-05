import * as usersHandler from '../handlers/usersHandler';
import router from '../configs/router';

router.param('id', usersHandler.checkId);

router
  .route('/')
  .get(usersHandler.getAll)
  .post(usersHandler.checkBody, usersHandler.create);

router
  .route('/:id')
  .get(usersHandler.getById)
  .patch(usersHandler.update)
  .delete(usersHandler.remove);

export default router;
