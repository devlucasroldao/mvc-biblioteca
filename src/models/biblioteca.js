class RegraDeEmprestimo extends Error {}
class LivroIndisponivel extends RegraDeEmprestimo {}
class LimiteDeEmprestimos extends RegraDeEmprestimo {}

const LIMITE = 2;

class Biblioteca {
  constructor() {
    this.livros = [
      { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", emprestadoPara: null },
      { id: 2, titulo: "Código Limpo em JS", autor: "Ryan McDermott", emprestadoPara: null },
      { id: 3, titulo: "Padrões de Projeto", autor: "Erich Gamma", emprestadoPara: null },
      { id: 4, titulo: "Refactoring", autor: "Martin Fowler", emprestadoPara: null },
    ];
  }

  buscar(id) {
    return this.livros.find((l) => l.id === id);
  }

  emprestimosDo(matricula) {
    return this.livros.filter((l) => l.emprestadoPara === matricula).length;
  }

  emprestar(id, matricula) {
    const livro = this.buscar(id);
    if (!livro) throw new RegraDeEmprestimo("Livro não encontrado.");

    if (livro.emprestadoPara)
      throw new LivroIndisponivel(
        `"${livro.titulo}" já está emprestado.`);

    if (this.emprestimosDo(matricula) >= LIMITE)
      throw new LimiteDeEmprestimos(
        `Matrícula ${matricula}: limite de ${LIMITE}.`);

    livro.emprestadoPara = matricula;
  }

  catalogo() {
    return this.livros.map((l) => ({ ...l, disponivel: !l.emprestadoPara }));
  }
}

module.exports = { Biblioteca, RegraDeEmprestimo, LivroIndisponivel, LimiteDeEmprestimos };
