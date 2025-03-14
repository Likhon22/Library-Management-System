import { Member } from '@prisma/client';
import prisma from '../../utils/prisma';

const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const getMembersFromDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};
const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMemberInDB = async (
  memberId: string,
  updatedMemberData: Partial<Member>,
) => {
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: updatedMemberData,
  });
  return result;
};

const deleteMemberFromDB = async (memberId: string) => {
  const isMemberExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  if (!isMemberExist) {
    throw new Error('Member not found');
  }
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });
  return result;
};
const memberServices = {
  createMemberIntoDB,
  getMembersFromDB,
  getSingleMemberFromDB,
  updateMemberInDB,
  deleteMemberFromDB,
};

export default memberServices;
