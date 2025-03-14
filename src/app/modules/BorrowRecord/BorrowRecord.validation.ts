import { z } from 'zod';

const borrowRecordValidationSchema = z.object({
  body: z.object({
    bookId: z.string(),
    memberId: z.string(),
  }),
});
const borrowRecordReturnValidationSchema = z.object({
  body: z.object({
    borrowId: z.string(),
  }),
});

const borrowRecordValidation = {
  borrowRecordValidationSchema,
  borrowRecordReturnValidationSchema,
};

export default borrowRecordValidation;
