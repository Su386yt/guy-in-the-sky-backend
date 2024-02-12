import { PrismaClient } from '@prisma/client'
import { getUser, getUserUUID } from './backend/UserManager';
import { randomUUID } from 'crypto';
import { addImageToDatabase } from './backend/ImageManager';
import { run } from './api/api';




export const prisma = new PrismaClient()

const userId = randomUUID().toString()
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

    console.log("Creating new image")
    const uploadedImage = await addImageToDatabase("image.jpg", currentUserId, "Description")
    console.log(uploadedImage)

    run()
}

main();