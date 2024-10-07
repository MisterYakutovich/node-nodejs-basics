import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./files/script.js', ...args]);
  
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
  
    childProcess.on('exit', (code) => {
      console.log(`Дочерний процесс завершился с кодом ${code}`);
    });
  
    childProcess.on('error', (err) => {
      console.error(`Ошибка дочернего процесса: ${err}`);
    });
  };
  
  spawnChildProcess(['arg1', 'arg2', 'arg3']);