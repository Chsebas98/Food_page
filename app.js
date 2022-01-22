const express = require("express");
require("dotenv").config();
const hbs = require("hbs");
//app
const app = express();

//middlewares
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//route
app.get("/", (req, res) => {
  res.render("main");
});
//port
const port = process.env.PORT || 3000;
//server
const server = app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
