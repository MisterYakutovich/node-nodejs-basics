import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const decompress = async () => {
    const gzip = zlib.createGunzip();
    const readStream = fs.createReadStream('archive.gz');
    const writeStream = fs.createWriteStream('fileToCompress.txt');
    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('File decompressed successfully!');
    });
  
    writeStream.on('error', (error) => {
      console.error('Error decompressing file:', error);
    });
}

await decompress();