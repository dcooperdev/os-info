#!/usr/bin/env node

const util = require('util');
const {
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
} = require('./src/host-os-info');

const getOSInfo = () => {
    const parametters = process.argv.slice(2);
    
    if (!parametters ||parametters.length === 0|| (parametters.length === 1 && parametters[0] === 'help')) {
        console.log(`
            Usage: host-os-info [help]
            
            help                Show this help
            type                Show the type of operating system
            release             Show the release of operating system
            cpu                 Show the CPU of operating system
            cpus                Show an array of each logical CPU core.
            uptime              Show the uptime of operating system
            userInfo            Show the user info of operating system
            endianness          Show the endianness of operating system
            freemem             Show the freemem of operating system
            totalmem            Show the totalmem of operating system
            homedir             Show the homedir of operating system
            loadavg             Show the loadavg of operating system
            networkInterfaces   Show the networkInterfaces of operating system
            tmpdir              Show the tmpdir of operating system
            `
        );
    
        return;
    }
    
    parametters.forEach(parametter => {
        switch(parametter) {
            case 'type':                console.log(util.inspect(type, {showHidden: false, depth: null, colors: true})); break;
            case 'release':             console.log(util.inspect(release, {showHidden: false, depth: null, colors: true})); break;
            case 'cpu':                 console.log(util.inspect(cpu, {showHidden: false, depth: null, colors: true})); break;
            case 'cpus':                console.log(util.inspect(cpus, {showHidden: false, depth: null, colors: true})); break;
            case 'uptime':              console.log(util.inspect(uptime, {showHidden: false, depth: null, colors: true})); break;
            case 'userInfo':            console.log(util.inspect(userInfo, {showHidden: false, depth: null, colors: true})); break;
            case 'endianness':          console.log(util.inspect(endianness, {showHidden: false, depth: null, colors: true})); break;
            case 'freemem':             console.log(util.inspect(freemem, {showHidden: false, depth: null, colors: true})); break;
            case 'totalmem':            console.log(util.inspect(totalmem, {showHidden: false, depth: null, colors: true})); break;
            case 'homedir':             console.log(util.inspect(homedir, {showHidden: false, depth: null, colors: true})); break;
            case 'loadavg':             console.log(util.inspect(loadavg, {showHidden: false, depth: null, colors: true})); break;
            case 'networkInterfaces':   console.log(util.inspect(networkInterfaces, {showHidden: false, depth: null, colors: true})); break;
            case 'tmpdir':              console.log(util.inspect(tmpdir, {showHidden: false, depth: null, colors: true})); break;
        }
    })
}

getOSInfo();

module.exports = getOSInfo;