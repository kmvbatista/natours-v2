const userHandler = require('../handlers/usersHandler');
const router = require('../router.js');

router.param('id', userHandler.checkId);

router
  .route('/')
  .get(userHandler.getAll)
  .post(userHandler.checkBody, userHandler.create);

router
  .route('/:id')
  .get(userHandler.getById)
  .patch(userHandler.update)
  .delete(userHandler.remove);

module.exports = router;
