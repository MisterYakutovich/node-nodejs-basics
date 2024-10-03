import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');

  try {
   
    if (!fs.existsSync(folderPath)) {
      console.error('Error: FS operation failed. Folder "files" does not exist.');
      return;
    }

    const files = fs.readdirSync(folderPath);
    console.log(`Files in "files" folder:`);
    files.forEach(file => console.log(file));

  } catch (error) {
    console.error('Error: ', error);
  }
};

await list();