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

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.getBooksFromDB();
  sendResponse(res, {
    message: 'Books fetched successfully',
    data: result,
    success: true,
    statusCode: 200,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await bookServices.getSingleBookFromDB(bookId);
  sendResponse(res, {
    message: 'Book fetched successfully',
    data: result,
    success: true,
    statusCode: 200,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await bookServices.updateBookInDB(bookId, req.body);
  sendResponse(res, {
    message: 'Book updated successfully',
    data: result,
    success: true,
    statusCode: 200,
  });
});

const bookControllers = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
};

export default bookControllers;
