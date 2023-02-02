// Adicionando um ponto para cada nota

const notas = [10, 9.5, 8, 7, 6];

// sem utilizar o map
notas.forEach((nota, index) => {
  if (nota + 1 >= 10) {
    nota = 10;
  } else {
    nota += 1;
  }
  notas[index] = nota;
  console.log(nota);
});
console.log(notas);

// utilizando o map
const novasNotas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});
console.log(novasNotas);

// é gerado um novo array
