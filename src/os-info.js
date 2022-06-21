const OS = require('os');

const convertToGB = bytesValue => (bytesValue / (1000 * 1000 * 1000)).toFixed(2);

const type = OS.type();
const release = OS.release();
const cpu = OS.cpus()[0].model;
const cpus = OS.cpus();
const uptime = OS.uptime();
const userInfo = OS.userInfo();
const endianness = OS.endianness();
const freemem = `${convertToGB(OS.freemem())} GB => ${Math.round(OS.freemem() * 100 / OS.totalmem())}% Free Memory`;
const totalmem = `${convertToGB(OS.totalmem())} GB`;
const homedir = OS.homedir();
const loadavg = OS.loadavg();
const networkInterfaces = OS.networkInterfaces();
const tmpdir = OS.tmpdir();
    
module.exports = {
    type,
    release,
    cpu,
    cpus,
    uptime,
    userInfo,
    endianness,
    freemem,
    totalmem,
    homedir,
    loadavg,
    networkInterfaces,
    tmpdir,
};