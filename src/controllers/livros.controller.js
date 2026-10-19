const { RegraDeEmprestimo } = require("../models/biblioteca");

const MATRICULA = /^\d{6}$/;

module.exports = function livrosController(biblioteca) {
  function pagina(res, status, extra) {
    res.status(status).render("livros", {
      livros: biblioteca.catalogo(),
      erro: null,
      ok: null,
      ...extra,
    });
  }

  return {
    listar(req, res) {
      pagina(res, 200);
    },

    emprestar(req, res) {
      const id = Number(req.params.id);
      const matricula = (req.body.matricula || "").trim();

      if (!MATRICULA.test(matricula))
        return pagina(res, 400, { erro: "Matrícula: 6 dígitos." });

      try {
        biblioteca.emprestar(id, matricula);
        return pagina(res, 200, { ok: "Empréstimo realizado!" });
      } catch (e) {
        if (!(e instanceof RegraDeEmprestimo)) throw e;
        return pagina(res, 422, { erro: e.message });
      }
    },
  };
};
