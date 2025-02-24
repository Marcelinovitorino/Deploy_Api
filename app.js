const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    res.send("Pagina principal")
});

const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log("Servidor rodando na url = http://localhost:7000")
});