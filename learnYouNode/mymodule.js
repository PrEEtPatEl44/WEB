const fs = require('fs');
const path = require('path');

module.exports = function filter(directoryName, extension, callback){
    extension='.'+extension;
    fs.readdir(directoryName, (err, list)=>{
        let arr=[];
        
           if(err){return callback(err, null);}
            for(let i=0; i<list.length; i++){
                if(path.extname(list[i])===(extension)){
                    arr.push(list[i]);
                    
                }
            }
            // console.log(arr);
            return callback(null, arr);
})}
// fs.readdir(directoryName, (err, list)=>{
//    if(err){console.log(`Preet:${err}`);}
//     for(let i=0; i<list.length; i++){
//         if(path.extname(list[i])===(extension)){
//             console.log(list[i]);
//         }
//     }
    
    
// })