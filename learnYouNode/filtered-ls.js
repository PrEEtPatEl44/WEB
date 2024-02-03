const fs = require('fs');
const path = require('path');
let filename = process.argv[2];
let extension = '.'+process.argv[3];
fs.readdir(filename, (err, list)=>{
    for(let i=0; i<list.length; i++){

        if(path.extname(list[i])===(extension)){
            console.log(list[i]);
        }
    }
    
    
})