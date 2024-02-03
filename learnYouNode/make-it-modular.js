const mm = require('./mymodule.js');

let directoryName = process.argv[2];
let extension = process.argv[3];
 mm(directoryName, extension, (err, data)=>{
        if(err){console.log()`Preet : ${err}`;}
        else{
            data.forEach(element => {
                console.log(element);
            });
        }
 })