const listaLivros = require("./array");
function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, direita);
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita);
    }
  }
  return array;
}

function particiona(array, esquerda, direita) {
  let pivo = array[Math.floor((esquerda + direita) / 2)];
  let atualEsquerda = esquerda;
  let atualDireita = direita;

  while (atualDireita <= atualEsquerda) {
    while (array[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++;
    }
    while (array[atualDireita].preco > pivo.preco) {
      atualDireita--;
    }
    if (atualEsquerda <= atualDireita) {
      trocaLugar(array, esquerda, direita);
      atualDireita--;
      atualEsquerda++;
    }
    return atualEsquerda;
  }
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
