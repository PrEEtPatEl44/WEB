import express from "express"
const app = express();
const port =3000;

app.get("/", (req, res)=>{
    res.send("Hello, Preet!");
})

app.get("/contact.html", (req, res)=>{
    res.send(`<div style="display: flex;justify-content: center;align-items: center;height: 100vh; flex-direction:column;color:blue"><h1>Contact Me</h1><br><p>E-mail:Preetp4404@gmail.com</p></div>`);
})

app.get("/about.html", (req, res)=>{
    res.send(`<div style="display: flex;justify-content: center;align-items: center;height: 100vh; flex-direction:column;color:red"><h1>Hii I am Preet</h1><br><p>I am a developer</p></div>`);
})

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})
