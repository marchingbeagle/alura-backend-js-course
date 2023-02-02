const pessoa = {
  nome: "Ana Júlia",
  profissao: "Engenheira de software",
  cargoAtual: "Dona do meu coração",
};

//console.log(pessoa["nome"]);
//console.log(pessoa["telefone"]); // propriedade inexistente

pessoa.telefone = "vem de zap gatinha"; // atribuindo valor para o telefone
//console.log(pessoa["telefone"]);

pessoa.nome += " Santinoni";
console.log(pessoa);
