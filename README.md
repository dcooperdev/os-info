# Host OS information

### use

    npx host-os-info <arg1> <arg2> ... <argN>

### install

    npm i host-os-info

### require

    const osInfo = require('host-os-info');

###Then use it like a function

    console.log (osInfo())

### arguments

    Usage: host-os-info <arg1> <arg2> ... <argN>
            
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