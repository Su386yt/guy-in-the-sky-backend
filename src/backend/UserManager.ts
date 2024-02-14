import { constrainedMemory } from 'process';
import { prisma } from '..';

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

export async function searchUsersByUsernameKeyword(keyword: string) {
    const users = await prisma.user.findMany({
        where: {
            username: {
                contains: keyword
            }
        }
    })
    prisma.$disconnect()

    return users
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