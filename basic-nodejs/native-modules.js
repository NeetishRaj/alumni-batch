// List of all the internal modules in nodejs
// https://nodejs.org/dist/latest-v16.x/docs/api/


// OPERATING SYSTEM Module

const os = require('os');
// https://nodejs.org/dist/latest-v16.x/docs/api/os.html

//  Find whether your machine is 64 bit or 32 bit
console.log(os.arch()); // x64

// Find info on the processors in your machine
console.log(os.cpus());



// FILE SYSTEM MODULE

const  fs = require('fs');
// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html


// Create a 'test' folder here

fs.mkdir('test', (err) => {
    console.log(err);
})