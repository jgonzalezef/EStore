const express = require('express');


app = express()

app.use("/",(req,res) => {
    res.json({
        "message":"Welcome to Estore API CI/CD TEST READY TO TEST 1.25"
    });
});

app.listen(3000,() =>{
    console.log("Servidor corriendo en el puerto 3000");
});