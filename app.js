const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    res.send("Esta e a pagina principal")
});
app.get("/admin",(req,res)=>{
    res.send("<h1>PAgina principal do admistrador</h1>")
})

const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log("Servidor rodando na url = http://localhost:7000")
});