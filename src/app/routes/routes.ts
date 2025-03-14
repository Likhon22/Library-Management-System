import { Router } from 'express';
import { bookRoutes } from '../modules/Book/book.routes';

const routes = Router();
type TRoutes = {
  path: string;
  routes: Router;
};
const moduleRoutes: TRoutes[] = [
  {
    path: '/books',
    routes: bookRoutes,
  },
];

moduleRoutes.forEach(route => {
  routes.use(route.path, route.routes);
});

export default routes;
