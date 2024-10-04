import { Transform } from 'stream';
const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, Buffer.from(chunk.toString().split('').reverse().join('')));
        }
      });
    
      process.stdin.pipe(reverseTransform).pipe(process.stdout);
    
      process.stdin.on('error', (error) => {
        console.error('Error reading input:', error);
      });
};

await transform();