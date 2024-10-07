import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const filename = 'fileToCompress.txt';
    const filePath = path.join(__dirname, 'files', filename); 
    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream('archive.gz');

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('File compressed successfully!');
    });
  
    writeStream.on('error', (error) => {
      console.error('Error compressing file:', error);
    });
};

await compress();