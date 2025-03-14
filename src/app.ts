import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import routes from './app/routes/routes';

export const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use('/api', routes);

const test = (req: Request, res: Response) => {
  res.send('It is working!!!');
};
app.get('/', test);
app.use(globalErrorHandler);

app.use(notFound);
