import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rename = async () => {
    const oldFilename = 'wrongFilename.txt';
    const newFilename = 'properFilename.md'; 
    const oldPath = path.join(__dirname, "files", oldFilename);
    const newPath = path.join(__dirname, "files", newFilename);
  
    try {
     
      if (!fs.existsSync(oldPath) || fs.existsSync(newPath) ) {
        console.error('Error: FS operation failed.');
        return;
      }
  
      fs.renameSync(oldPath, newPath);
      console.log(`File renamed successfully from ${oldFilename} to ${newFilename}`);
  
    } catch (error) {
      console.error('Error: ', error);
    }
};

await rename();