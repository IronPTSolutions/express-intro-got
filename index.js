
const express = require("express");
const Episode = require("./data");
const hbs = require("hbs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// Rutas aquí

app.get("/", (req, res) => {
	Episode.find().then((episodes) => {
		res.render("episodes", { episodes });
	});
});

app.get("/episodes/:id", (req, res) => {
	Episode.findById(req.params.id).then((episode) => {
		if (episode) {
			res.render("episode", { episode });
		} else {
			res.redirect("/");
		}
	});
});

app.listen(3000, () => {
  console.log("Ready!");
});