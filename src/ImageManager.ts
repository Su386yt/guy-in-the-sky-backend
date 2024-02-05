import { exiftool } from 'exiftool-vendored';
import { prisma } from '.';
import { UUID, randomUUID } from 'crypto';


export async function addImageToDatabase(imagePath: string, userid: UUID, description: string) {
    const metadata = await extractMetadata(imagePath)
    const imageId = randomUUID().toString()
    
    const image = await prisma.image.create({
        data: {
            imageId: imageId,
            userId: userid.toString(),
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