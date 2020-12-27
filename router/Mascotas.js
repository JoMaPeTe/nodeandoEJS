const express = require ("express");
const router = express.Router();

router.get("/",(req , res) =>{
    res.render("mascotas", {
        arrayMascotas:[
            {id:'dffdf', nombre: 'rex', descripcion: 'rex descripcion'},
            {id:'dasfsa', nombre: 'chanchan', descripcion: 'chanchan descripcion'}
        ]
     });
 })

module.exports = router;