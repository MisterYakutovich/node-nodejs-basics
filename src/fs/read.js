import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filename = 'fileToRead.txt';
    const filePath = path.join(__dirname,"files", filename);

    try {
     
      if (!fs.existsSync(filePath)) {
        console.error(`Error: FS operation failed. File "${filename}" does not exist.`);
        return;
      }
  
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log(`Content of "${filename}":\n${fileContent}`);
  
    } catch (error) {
      console.error('Error: ', error);
    }
};

await read();