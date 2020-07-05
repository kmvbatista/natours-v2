import { Request, Response, NextFunction } from 'express';

function getAll(req: Request, res: Response) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function getById(req: Request, res: Response) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function remove(req: Request, res: Response) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
  req.body = 'dafdfa';
}
function update(req: Request, res: Response) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}
function create(req: Request, res: Response) {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
}

function checkId(req: Request, res: Response, next: NextFunction) {
  next();
}

function checkBody(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name',
    });
  }
}
export { update, remove, getById, getAll, checkId, checkBody, create };
