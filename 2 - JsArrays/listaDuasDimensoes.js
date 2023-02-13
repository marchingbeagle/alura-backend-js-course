const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];
const [listaAlunos, listaMedias] = listaDeAlunosEMedias;

console.log(
  `A aluna da posicao 1 é a ${listaAlunos[1]} e a sua nota é ${listaMedias[1]}`
);

//console.log(listaDeNotasEMedias);
//console.log(listaDeNotasEMedias[1][2]); // o 1 se refere a posicao do array listadenotas, ja o 2, se refere a posicao do array de medias, que é o da posicao 1 do array lista de notas
