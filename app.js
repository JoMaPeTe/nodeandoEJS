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
const port = process.env.PORT || 3000;


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + "/public"));

app.get("/",(req , res) =>{
   res.render("index", { titulo: 'mi titulo dinamico' });
})

app.get("/servicios",(req , res) =>{
    res.render("servicios", { tituloServicios: 'mi titulo dinamico de Servicios' });
 })
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port} `);
})
app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "pagina error"
    });
  });
