import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filename = 'fileToRemove.txt';
    const filePath = path.join(__dirname,"files", filename);

    try {
       
        if (!fs.existsSync(filePath)) {
          console.error(`Error: FS operation failed. File "${filename}" does not exist.`);
          return;
        }
    
       
        fs.unlinkSync(filePath);
        console.log(`File "${filename}" deleted successfully.`);
    
      } catch (error) {
        console.error('Error: ', error);
      }
};

await remove();