import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filename = 'fileToRead.txt';
    const filePath = path.join(__dirname,"files", filename);
    const readStream = fs.createReadStream(filePath, 'utf-8');
  
    readStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
  
    readStream.on('error', (error) => {
      console.error('Error reading file:', error);
    });
};

await read();