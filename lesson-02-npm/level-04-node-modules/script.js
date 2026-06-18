import {cpus, totalmem, freemem, machine, platform} from "node:os";

const cpuInfo = cpus();

const totalmemInfo = totalmem();

const freememInfo = freemem();

const machineInfo = machine();

const platformInfo = platform();

console.log("CPU:", cpuInfo);
console.log(`Memory: ${totalmemInfo}`);
console.log(`Free: ${freememInfo}`);
console.log(`Machine: ${machineInfo}`);
console.log(`Platform: ${platformInfo}`);

