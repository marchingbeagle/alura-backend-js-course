const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  console.log(nome);
});

// usando arrow function

nomes.forEach((nome, index) => {
  console.log(nome);
  //console.log(index);
});

function printName(nome) {
  console.log(nome);
}

nomes.forEach(printName); // nao deve ser escrito printName()
