import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import BorrowRecordService from './BorrowRecord.service';
import sendResponse from '../../utils/sendResponse';

const createBorrowRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowRecordService.createBorrowRecordIntoDB(req.body);
  sendResponse(res, {
    message: 'Borrow record created successfully',
    data: result,
    statusCode: 201,
    success: true,
  });
});

const getBorrowRecords = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowRecordService.getBorrowRecordFromDB();
  sendResponse(res, {
    message: 'Borrow records retrieved successfully',
    data: result,
    statusCode: 200,
    success: true,
  });
});
const returnBorrowRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowRecordService.returnBorrowRecordIntoDB(req.body);
  sendResponse(res, {
    message: 'Borrow record returned successfully',
    data: result,
    statusCode: 200,
    success: true,
  });
});
const overdueBorrowRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowRecordService.overdueBorrowRecordFromDB();
  sendResponse(res, {
    message: 'Overdue borrow record retrieved successfully',
    data: result,
    statusCode: 200,
    success: true,
  });
});

const BorrowRecordControllers = {
  createBorrowRecord,
  getBorrowRecords,
  returnBorrowRecord,
  overdueBorrowRecord,
};

export default BorrowRecordControllers;
