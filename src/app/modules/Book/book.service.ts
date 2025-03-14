import { Book } from '@prisma/client';
import prisma from '../../utils/prisma';

const createBookIntoDB = async (bookData: Book) => {
  const result = await prisma.book.create({
    data: bookData,
  });
  return result;
};

const bookServices = {
  createBookIntoDB,
};

export default bookServices;
