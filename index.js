
const express = require("express");

const app = express();

const port = 3001;

const {getCountries, getCountryById} = require("./controller/getCountries")

app.get("/", getCountries);
app.get("/:id", getCountryById);


app.listen(port,()=>{
    console.log("conectado ok");
    console.log("filete");
    console.log(`concetado en el puerto: ${port}`);
})