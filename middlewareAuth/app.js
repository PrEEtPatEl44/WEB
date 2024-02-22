const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const HTTP_PORT=process.env.HTTP_PORT||8080;

const users =[]
// app.use((req, res , next)=>{
//     console.log('this is middle ware')
//     next()
// })

// app.get("/:id", auth, (req, res)=>{
//     res.send(req.params.id);
// })

// function auth(req, res, next){
//     if(req.params.id){
//         next();
//     }
//     else{
//         res.send('Make an account first');
//     }
// }
app.use(bodyParser.json());

app.post("/", (req, res)=>{
    console.log(req.body.password)
    if(req.body.password==="1234"){
        res.send('success')
    }
    else{
        res.send('failed')
    }
})

app.listen(HTTP_PORT);