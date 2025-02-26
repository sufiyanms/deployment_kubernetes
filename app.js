const express = require("express");
const app = express();
let port=3000;


app.use(express.json())

app.get("/", (req, res)=>{
    res.send("welcome!")
})


app.listen(port,()=>{
    console.log("server started");
})
