function getAll(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function getById(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function remove(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function update(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function create(req, res) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}

function checkId(req, res, next) {
  next();
}

function checkBody(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name',
    });
  }
}
module.exports = {
  update,
  remove,
  getById,
  getAll,
  checkId,
  checkBody,
  create,
};
