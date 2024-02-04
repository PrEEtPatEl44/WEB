const http = require('http');

let body=[];
http.get(process.argv[2], res =>{
    res.setEncoding('utf-8');
    
    res.on('error', e=>{
        console.log(`FAILURE: ${e}`);
    })
    res.on('data', chunk=>{
        body+=chunk;
    })
    res.on('end', ()=>{
        
         console.log(body.length);
         console.log(body);
    })
})
