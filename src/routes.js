const express = require("express");
const livrosController = require("./controllers/livros.controller");

module.exports = function routes(biblioteca) {
  const router = express.Router();
  const livros = livrosController(biblioteca);

  router.get("/livros", livros.listar);
  router.post("/livros/:id/emprestar", livros.emprestar);

  return router;
};
