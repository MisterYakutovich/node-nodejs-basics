import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceDir = path.join(__dirname, 'files'); 
    const destinationDir = path.join(__dirname, 'files_copy'); 
  
    try {
      
      if (!fs.existsSync(sourceDir) || fs.existsSync(destinationDir)) {
        console.error('Error: FS operation failed.');
        return;
      }
  
      fs.mkdirSync(destinationDir);
      console.log('Destination folder created.');
     
      fs.readdirSync(sourceDir).forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const destinationPath = path.join(destinationDir, file);
  
        fs.copyFileSync(sourcePath, destinationPath);
        console.log(`Copied file ${file} to files_copy`);
      });
  
      console.log('Files copied successfully.');
  
    } catch (error) {
      console.error('Error: ', error);
    }
};

await copy();
