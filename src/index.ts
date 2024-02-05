import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
import { getUser, getUserUUID } from './userManagement';




export const prisma = new PrismaClient()

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

main();
