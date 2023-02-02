const livros = require("./listaLivros");

// logica q eu fiz
let menorPreco = livros[0].preco;
let menorPrecoPosicao = 0;

for (let posicaoLivro = 0; posicaoLivro < livros.length; posicaoLivro++) {
  if (menorPreco > livros[posicaoLivro].preco) {
    menorPreco = livros[posicaoLivro].preco;
    menorPrecoPosicao = posicaoLivro;
  }
}
console.log(
  `O livro mais barato é o de ${livros[menorPrecoPosicao].titulo} e ele custa ${livros[menorPrecoPosicao].preco} reais`
);
