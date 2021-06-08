const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const events = require("./events");

const app = express().use(cors())

app.get("/", (req, res) => {});

app.get("/Verificar/:nombre", (req, res) => {
    var n = req.params.nombre
    if(isNaN(n) == true)
    {
      res.json('1').status(200)
    }
    else
    {
      res.json('0').status(500)
    }
});

let port = 3000;


if(process.env.NODE_ENV === 'test') {
  port = 4000;
}

app.listen(port, () => {
  console.log("Servidor iniciado en puerto "+port);
});
