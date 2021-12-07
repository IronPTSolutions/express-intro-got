const express = require("express");
const Episode = require("./data");
const hbs = require("hbs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// Rutas aquí

//Crear ruta / que renderice un header y un listado de capítulos 
//utilizar componente Navbar de bootstrap para header
//utilizar componente Card de bootstrap para capítulo

app.get("/", (req, res) => {
    Episode.find().then((episodes) => {
        res.render("list", {
            episodes: episodes,
        });
    }); 
});

app.get("/episodes/:id", (req, res) => {
    const id = req.params.id;

    Episode.findById(id).then((episode) => {
        res.render("detail", {
            episode: episode,
        });
    }); 
});

app.listen(3000, () => {
  console.log("Ready!");
});

