/* LLAMAR MODULO EXPORTADO 
    const {frutas, dinero} = require ("./frutas")
    frutas.forEach(item =>   console.log(item));
     console.log(dinero);
*/

/*CREACION SERVIDOR HTTP
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando...");
});
*/

const express = require("express");
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

console.log(__dirname);

const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.axfbh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
            { useNewUrlParser: true, useUnifiedTopology: true }
               )
               .then(()=> console.log('Base de datos conectada'))
               .catch(e => console.log(e));


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + "/public"));

//Rutas web
app.use("/",require('./router/RutasWeb'))

app.use("/mascotas", require('./router/Mascotas'))

app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "pagina error"
    });
  });

  app.listen(port, () => {
    console.log(`Escuchando el puerto ${port} `);
})