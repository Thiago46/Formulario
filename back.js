//nombre %><%= apellido %> tenes <%= 2022 - fecha %> años ,{apellido: req.body.apellido},{fecha: req.body.fecha}
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const ruta = path.join(__dirname, "./index.html");
const bodyparser = require("body-parser");
const ejs = require("ejs");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/vistas");

app.get("/", (req, res) => {
    res.sendFile(ruta);
});
app.post("/ejemplo", (req, res) => {
    res.render("vista1", {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
