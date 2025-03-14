import { BorrowRecord } from '@prisma/client';
import prisma from '../../utils/prisma';

const createBorrowRecordIntoDB = async (payload: BorrowRecord) => {
  const isBookExist = await prisma.book.findUniqueOrThrow({
    where: {
      id: payload.bookId,
    },
  });
  if (!isBookExist) {
    throw new Error('Book not found');
  }
  const isMemberExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload.memberId,
    },
  });
  if (!isMemberExist) {
    throw new Error('Member not found');
  }
  const result = await prisma.borrowRecord.create({
    data: payload,
  });
  return result;
};

const getBorrowRecordFromDB = async () => {
  const result = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
    },
  });
  return result;
};
const returnBorrowRecordIntoDB = async (
  payload: Pick<BorrowRecord, 'borrowId'>,
) => {
  const isBorrowRecordExist = await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: payload.borrowId,
    },
  });
  if (!isBorrowRecordExist) {
    throw new Error('Borrow record not found');
  }
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: payload.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};
const BorrowRecordService = {
  createBorrowRecordIntoDB,
  getBorrowRecordFromDB,
  returnBorrowRecordIntoDB,
};

export default BorrowRecordService;
