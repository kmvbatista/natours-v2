import { Request, Response, NextFunction } from 'express';

export function checkId(req: Request, res: Response, next: NextFunction) {
  next();
}

export function checkBody(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
}

export function getAll(req: Request, res: Response) {
  console.log('aaaaaa');
}

export function getById(req: Express.Request, res: Express.Response) {
  console.log('bbbbbb');
}

export function deleteById(req: Express.Request, res: Express.Response) {}

export function create(req: Express.Request, res: Express.Response) {}

export function update(req: Express.Request, res: Express.Response) {}
