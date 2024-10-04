import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filename = 'fileToWrite.txt';
    const filePath = path.join(__dirname,"files", filename);
    const writeStream = fs.createWriteStream(filePath);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
      });
    
      process.stdin.on('end', () => {
        writeStream.end();
        console.log('Data written to file successfully!');
      });
    
      process.stdin.on('error', (error) => {
        console.error('Error reading input:', error);
      });
};

await write();