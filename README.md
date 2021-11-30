1. Crear el proyecto:

```
npm init
npm install express nodemon hbs
```

2. Añadir script `dev` a package.json

3. Programar `index.js`

```
const express = require("express");
const User = require("./data");
const hbs = require("hbs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// Rutas aquí

app.listen(3000, () => {
  console.log("Ready!");
});

```

5. Crear ruta / que renderice el un header y un listado de capítulos

   - utilizar componente Navbar de bootstrap para header
   - utilizar componente Card de bootstrap para capítulo

6. Crear ruta /episodes/XX que renderice el detalle de un capítulo donde XX es el id del capítulo

Nota: utilizar el código en `data.js` para obtener los capítulos. Ejemplo

```
const Episode = require('./data.js')

Episode.find()
    .then(episodes => {
        // ...
    })

Episode.findById(id)
    .then(episode => {
        // ...
    })
```

episode structure:

```
{
    "id":4952,
    "name":"Winter is Coming",
    "season":1,
    "number":1,
    "image":"http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
    "summary":"Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage."
}
```
