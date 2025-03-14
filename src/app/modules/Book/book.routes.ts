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

router.get('/', bookControllers.getBooks);

router.get('/:bookId', bookControllers.getSingleBook);
router.put(
  '/:bookId',
  validateRequest(bookValidations.updateBookValidationSchema),
  bookControllers.updateBook,
);
router.delete('/:bookId', bookControllers.deleteBook);

export const bookRoutes = router;
