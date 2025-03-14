/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import config from '../config';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const message = 'Api not found';
  const statusCode = 404;
  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default notFound;
