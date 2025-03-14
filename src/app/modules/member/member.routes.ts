import { Router } from 'express';

import validateRequest from '../../middleware/validateRequest';

import memberControllers from './member.controller';
import memberValidations from './member.validation';

const router = Router();

router.post(
  '/create-member',
  validateRequest(memberValidations.createMemberValidationSchema),
  memberControllers.createMember,
);

router.get('/', memberControllers.getMembers);

router.get('/:memberId', memberControllers.getSingleMember);
router.put(
  '/:memberId',
  validateRequest(memberValidations.updateMemberValidationSchema),
  memberControllers.updateMember,
);
router.delete('/:memberId', memberControllers.deleteMember);

export const memberRoutes = router;
