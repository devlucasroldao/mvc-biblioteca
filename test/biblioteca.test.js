const test = require("node:test");
const assert = require("node:assert");
const { Biblioteca, LivroIndisponivel, LimiteDeEmprestimos } = require("../src/models/biblioteca");

test("empresta um livro disponível", () => {
  const b = new Biblioteca();
  b.emprestar(1, "123456");
  assert.strictEqual(b.buscar(1).emprestadoPara, "123456");
});

test("barra livro que já está emprestado", () => {
  const b = new Biblioteca();
  b.emprestar(1, "123456");
  assert.throws(() => b.emprestar(1, "654321"), LivroIndisponivel);
});

test("barra o terceiro livro da mesma matrícula", () => {
  const b = new Biblioteca();
  b.emprestar(1, "123456");
  b.emprestar(2, "123456");
  assert.throws(() => b.emprestar(3, "123456"), LimiteDeEmprestimos);
});
