import { Worker, isMainThread } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numCPUs = os.cpus().length; 
    const workers = [];
    const results = [];

    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        workers.push(worker);

        
        worker.postMessage(10 + i);

        worker.on('message', (result) => {
            results[i] = result; 
            worker.terminate(); 
        });

        worker.on('error', (error) => {
            results[i] = { status: 'error', data: null };
        });
    }

    await Promise.all(workers.map(worker => new Promise(resolve => {
        worker.on('exit', resolve);
    })));

    console.log(results);
};

if (isMainThread) {
    performCalculations().catch(err => console.error(err));
}