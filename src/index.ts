import { ExifTool } from "exiftool-vendored"

const exifTool = new ExifTool()

async function extractMetadata(imagePath: string) {
  try {
      const metadata = await exifTool.read(imagePath);
      console.log(JSON.stringify(metadata, null, 2));
  } catch (error) {
      console.error('Error reading metadata:', error);
  } finally {
      await exifTool.end();
  }
}

// Replace 'path/to/image.jpg' with the path to your image file
extractMetadata('image.jpg');