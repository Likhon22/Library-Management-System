import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import bookServices from './book.service';
import sendResponse from '../../utils/sendResponse';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.createBookIntoDB(req.body);
  sendResponse(res, {
    message: 'Book created successfully',
    data: result,
    success: true,
    statusCode: 201,
  });
});

const bookControllers = {
  createBook,
};

export default bookControllers;
