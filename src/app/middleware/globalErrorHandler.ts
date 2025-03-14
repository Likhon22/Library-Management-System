/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const message = err.message || 'Something went wrong';
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message,
    err,
    stack:
      config.node_env === 'development' && err.stack ? err.stack : undefined,
  });
};

export default globalErrorHandler;
