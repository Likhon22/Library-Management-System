import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

export const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const test = (req: Request, res: Response) => {
  res.send('It is working!!!');
};
app.get('/', test);
app.use(globalErrorHandler);

app.use(notFound);
