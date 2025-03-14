import { Router } from 'express';
import BorrowRecordControllers from './BorrowRecord.controller';
import validateRequest from '../../middleware/validateRequest';
import borrowRecordValidation from './BorrowRecord.validation';

const router = Router();

router.post(
  '/create-borrow-record',
  validateRequest(borrowRecordValidation.borrowRecordValidationSchema),
  BorrowRecordControllers.createBorrowRecord,
);

router.get('/', BorrowRecordControllers.getBorrowRecords);
router.post(
  '/return-borrow-record',
  validateRequest(borrowRecordValidation.borrowRecordReturnValidationSchema),
  BorrowRecordControllers.returnBorrowRecord,
);

export const borrowRecordRoutes = router;
