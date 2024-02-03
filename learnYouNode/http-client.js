const http = require('http');
let data=[];
http.get(process.argv[2], res =>{
    res.setEncoding('utf-8');
    
    res.on('error', e=>{
        console.log(`FAILURE: ${e}`);
    })
    res.on('data', chunk=>{
        data.push(chunk);
    })
    res.on('end', ()=>{
        data.forEach(elm=>{
            console.log(elm);
        })
        // console.log(data);
    })
})
