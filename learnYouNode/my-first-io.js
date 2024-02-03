const fs = require('fs');
let filename = process.argv[2];
let content = fs.readFileSync(filename);
let a= content.toString();
let lines = a.split('\n').length-1;
console.log(lines);
