const express = require('express');

const app = express();

app.use(express());

app.get('/',(res,req)=>{
    res.send("checking")
})


app.listen(2000,()=>console.log("server is listening"));