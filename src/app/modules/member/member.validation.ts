import { z } from 'zod';

const createMemberValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    phone: z.string({ required_error: 'Phone is required' }),
    membershipDate: z.string({ required_error: 'Membership Date is required' }),
  }),
});

const updateMemberValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    membershipDate: z.string().optional(),
  }),
});
const memberValidations = {
  createMemberValidationSchema,
  updateMemberValidationSchema,
};

export default memberValidations;
