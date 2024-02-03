const fs = require('fs');
fs.readFile(process.argv[2], (err, data)=>{
    let a= data.toString();
    
    let lines = a.split('\n').length-1;
    console.log(lines);
})