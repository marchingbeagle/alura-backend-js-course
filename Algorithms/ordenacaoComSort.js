const livros = require("./listaLivros");

const livrosOrganizados = livros.sort((a, b) => {
  if (a.preco > b.preco) {
    return 1;
  }
  if (a.preco < b.preco) {
    return -1;
  }
  return 0;
});
console.log(livrosOrganizados[0].preco);
