const path = require("path");
const express = require("express");
const { Biblioteca } = require("./src/models/biblioteca");
const routes = require("./src/routes");

function criarApp() {
  const app = express();
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "src", "views"));
  app.use(express.urlencoded({ extended: false }));
  app.use(routes(new Biblioteca()));
  app.get("/", (req, res) => res.redirect("/livros"));
  return app;
}

if (require.main === module) {
  criarApp().listen(3000, () => console.log("http://localhost:3000/livros"));
}

module.exports = criarApp;
