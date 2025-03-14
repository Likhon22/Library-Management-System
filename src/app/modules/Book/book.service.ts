import { Book } from '@prisma/client';
import prisma from '../../utils/prisma';

const createBookIntoDB = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

const getBooksFromDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      id: bookId,
    },
  });

  return result;
};

const updateBookInDB = async (
  bookId: string,
  updatedBookData: Partial<Book>,
) => {
  const result = await prisma.book.update({
    where: {
      id: bookId,
    },
    data: updatedBookData,
  });
  return result;
};

const deleteBookFromDB = async (bookId: string) => {
  const isBookExist = await prisma.book.findUniqueOrThrow({
    where: {
      id: bookId,
    },
  });
  if (!isBookExist) {
    throw new Error('Book not found');
  }
  const result = await prisma.book.delete({
    where: {
      id: bookId,
    },
  });
  return result;
};
const bookServices = {
  createBookIntoDB,
  getBooksFromDB,
  getSingleBookFromDB,
  updateBookInDB,
  deleteBookFromDB,
};

export default bookServices;
