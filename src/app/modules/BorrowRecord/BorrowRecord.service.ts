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

const overdueBorrowRecordFromDB = async () => {
  const result = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lte: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      },
    },
  });

  // Calculate overdue time for each record
  const resultWithOverdueTime =
    result.length > 0
      ? result.map(record => {
          const currentDate = new Date().getTime();
          const borrowDate = new Date(record.borrowDate).getTime();
          const diffTime = currentDate - borrowDate;

          const overdueTime = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          const overDueDays = overdueTime - 14;
          if (overDueDays < 0) {
            return { ...record, message: 'No overdue borrow records found' };
          }
          return { ...record, overDueDays };
        })
      : { result, message: 'No overdue borrow records found' };
  return resultWithOverdueTime;
};
const BorrowRecordService = {
  createBorrowRecordIntoDB,
  getBorrowRecordFromDB,
  returnBorrowRecordIntoDB,
  overdueBorrowRecordFromDB,
};

export default BorrowRecordService;
