// const livro = function (nome, editora, paginas) {
//   (gNome = nome), (gEditora = editora), (gPaginas = paginas);
//
//   this.getNome = function () {
//     return gNome;
//   };
//   this.getEditora = function () {
//     return gEditora;
//   };
//   this.getPaginas = function () {
//     return gPaginas;
//   };
// };
//
// const JavaScript = new livro("JavaScript", "Junin Livros", 136);

class LivroClasse {
  constructor(nome, editora, paginas) {
    this.nome = nome;
    this.editora = editora;
    this.paginas = paginas;
  }
  AnunciarTitulo() {
    console.log(`O titulo do livro é ${this.nome}`);
  }
}

const NodeJS = new LivroClasse("NodeJS", "Mozilla", 312);
NodeJS.AnunciarTitulo();
