const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); // eh como se fosse um array só que os elementos dele não podem se repetir
const nomesAtualizados = [...meuSet]; // transforma em array novamente

console.log(nomesAtualizados);
