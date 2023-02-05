const { edGalho, edFolha } = require("./arrays");

function juntarListar(lista1, lista2) {
  let listaFinal = [];
  let posLista1 = 0;
  let posLista2 = 0;
  let atual = 0;
  while (posLista1 < lista1.length && posLista2 < lista2.length) {
    let produtoAtualLista1 = lista1[posLista1];
    let produtoAtualLista2 = lista2[posLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posLista1++;
    } else if (produtoAtualLista1.preco > produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista2;
      posLista2++;
    }
    atual++;
  }

  while (posLista1 < lista1.length) {
    listaFinal[atual] = lista1[posLista1];
    posLista1++;
  }

  while (posLista2 < lista2.length) {
    listaFinal[atual] = lista2[posLista2];
    posLista2++;
  }

  return listaFinal;
}

console.log(juntarListar(edGalho, edFolha));
