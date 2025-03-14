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
const bookServices = {
  createBookIntoDB,
  getBooksFromDB,
  getSingleBookFromDB,
  updateBookInDB,
};

export default bookServices;
