import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

import sendResponse from '../../utils/sendResponse';
import memberServices from './member.service';

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.createMemberIntoDB(req.body);
  sendResponse(res, {
    message: 'member created successfully',
    data: result,
    success: true,
    statusCode: 201,
  });
});

const getMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await memberServices.getMembersFromDB();
  sendResponse(res, {
    message: 'members fetched successfully',
    data: result,
    success: true,
    statusCode: 200,
  });
});

const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberServices.getSingleMemberFromDB(memberId);
  sendResponse(res, {
    message: 'member fetched successfully',
    data: result,
    success: true,
    statusCode: 200,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberServices.updateMemberInDB(memberId, req.body);
  sendResponse(res, {
    message: 'member updated successfully',
    data: result,
    success: true,
    statusCode: 200,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await memberServices.deleteMemberFromDB(memberId);
  sendResponse(res, {
    message: 'member deleted successfully',
    success: true,
    statusCode: 200,
    data: result,
  });
});

const memberControllers = {
  createMember,
  getMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};

export default memberControllers;
