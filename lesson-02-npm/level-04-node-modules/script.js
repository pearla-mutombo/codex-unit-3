import {cpus, totalmem, freemem, machine, platform} from "node:os";

const cpuInfo = cpus();

const totalmemInfo = totalmem();

const freememInfo = freemem();

const machineInfo = machine();

const platformInfo = platform();

console.log(cpuInfo);
console.log(totalmemInfo);
console.log(freememInfo);
console.log(machineInfo);
console.log(platformInfo);

