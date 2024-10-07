// n should be received from main thread
import { parentPort} from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult=()=>{
 
 if (parentPort) {
  parentPort.on('message', (n) => {
      try {
          const result = nthFibonacci(n);
          parentPort.postMessage({ status: 'resolved', data: result });
      } catch (error) {
          parentPort.postMessage({ status: 'error', data: null });
      }
  });
} else {
  console.error("This script must be run as a worker thread.");
}
}
sendResult()
