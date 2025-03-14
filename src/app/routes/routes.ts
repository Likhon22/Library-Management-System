import { Router } from 'express';
import { bookRoutes } from '../modules/Book/book.routes';
import { memberRoutes } from '../modules/member/member.routes';

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
  {
    path: '/member',
    routes: memberRoutes,
  },
];

moduleRoutes.forEach(route => {
  routes.use(route.path, route.routes);
});

export default routes;
