import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt'); 
    try {    
      if (fs.existsSync(filePath)) {
        console.error('Error: FS operation failed.');
        return;
      }
      fs.writeFileSync(filePath, 'I am fresh and young');
      console.log('File created successfully.'); 
    } catch (error) {
      console.error('Error: ', error);
    }
};

await create();