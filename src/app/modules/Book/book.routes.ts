import { Router } from 'express';
import bookControllers from './book.contoller';
import validateRequest from '../../middleware/validateRequest';
import bookValidations from './book.validation';

const router = Router();

router.post(
  '/create-book',
  validateRequest(bookValidations.createBookValidationSchema),
  bookControllers.createBook,
);

export const bookRoutes = router;
