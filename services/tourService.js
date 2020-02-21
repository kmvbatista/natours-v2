exports.checkId = (req, res, next, val) => {
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
};

exports.getAll = (req, res) => {
  console.log('aaaaaa');
};

exports.getById = (req, res) => {
  console.log('bbbbbb');
};

exports.deleteById = (req, res) => {};

exports.create = (req, res) => {};

exports.update = (req, res) => {};
