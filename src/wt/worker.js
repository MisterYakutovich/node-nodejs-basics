// n should be received from main thread
import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    // This function sends result of nthFibonacci computations to main thread
    if (parentPort) {
        // Отправка сообщения в основной поток
        parentPort.postMessage(result); 
      } else {
        console.error('Parent port is null. Unable to send message.');
      }
};
parentPort.once('online', () => {
    parentPort.on('message', (n) => {
      try {
        const result = nthFibonacci(n);
        sendResult({ status: 'resolved', data: result });
      } catch (error) {
        sendResult({ status: 'error', data: null });
      }
    });
  });