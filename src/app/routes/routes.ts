import { Router } from 'express';
import { bookRoutes } from '../modules/Book/book.routes';
import { memberRoutes } from '../modules/member/member.routes';
import { borrowRecordRoutes } from '../modules/BorrowRecord/BorrowRecord.routes';

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
  {
    path: '/borrow-record',
    routes: borrowRecordRoutes,
  },
];

moduleRoutes.forEach(route => {
  routes.use(route.path, route.routes);
});

export default routes;
