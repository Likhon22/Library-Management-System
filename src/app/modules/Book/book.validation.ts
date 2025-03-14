import { z } from 'zod';

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    genre: z.string(),
    publishedYear: z.number(),
    totalCopies: z.number(),
    availableCopies: z.number(),
  }),
});

const bookValidations = {
  createBookValidationSchema,
};

export default bookValidations;
