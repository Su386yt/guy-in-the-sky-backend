import { randomUUID } from 'crypto';
import { exiftool } from 'exiftool-vendored';
import { prisma } from '.';


export async function addImageToDatabase(imagePath: string, userid: string, description: string) {
    const metadata = await extractMetadata(imagePath)
    const imageId = randomUUID().toString()
    
    const image = await prisma.image.create({
        data: {
            imageId: imageId,
            userId: userid,
            metadata: metadata,
            imagePathName: imagePath,
            description: description
        },
    })
    prisma.$disconnect()

    return image
}

async function extractMetadata(imagePath: string) {
    try {
        const metadata = await exiftool.read(imagePath);
        await exiftool.end();

        return JSON.stringify(metadata, null, 2);
    } catch (error) {
        console.error('Error reading metadata:', error);
        await exiftool.end();

        return ""
    }
}