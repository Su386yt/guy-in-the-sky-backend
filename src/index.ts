import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';




const prisma = new PrismaClient()

const userId = uuidv4()
const username = "flagmaster"
const displayName = "FlagMaster"

async function main() {
    console.log("Printing users")
    console.log(await prisma.user.findMany())

    var currentUserId = userId
    console.log("Printing user uuid")
    currentUserId = await getUserUUID(username)
    console.log(currentUserId)

    console.log("Printing user data")
    const queriedUser = await getUser(currentUserId)
    console.log(queriedUser)
}

async function createNewUser(userId: string, username: string, displayName: string) {
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

async function getUser(userId: string) {
    const user = await prisma.user.findUnique({
        where: {userId: userId}
    })
    prisma.$disconnect()

    return user
}

async function getUserUUID(username: string) {
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

main();
