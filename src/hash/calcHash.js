import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path";
import crypto from "crypto"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filename = 'fileToCalculateHashFor.txt';
    const filePath = path.join(__dirname, 'files', filename); 
    const hash = crypto.createHash('sha256');
  
    try {
      const readStream = fs.createReadStream(filePath);
      readStream.on('data', (chunk) => hash.update(chunk));
      readStream.on('end', () => {
        const hashDigest = hash.digest('hex');
        console.log(`SHA256 hash of "${filename}": ${hashDigest}`);
      });
    } catch (error) {
      console.error('Error: ', error);
    }
};

await calculateHash();