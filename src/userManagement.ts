import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '.';

export async function createNewUser(userId: string, username: string, displayName: string) {
  const user = await prisma.user.create({
      data: {
          userId: userId,
          username: username,
          displayName: displayName
      },
  })
  prisma.$disconnect()

  return user
}

export async function getUser(userId: string) {
  const user = await prisma.user.findUnique({
      where: {userId: userId}
  })
  prisma.$disconnect()

  return user
}

export async function getUserUUID(username: string) {
  const data = await prisma.user.findUnique(
      {
          where: {username: username},
          select: {userId: true}
      }
  )

  if (data?.userId != null) {
      return data.userId
  } else {
      return ""
  }
}