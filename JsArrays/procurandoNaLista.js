const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeNotasEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeNotasEMedias[0].includes(aluno)) {
    //const alunos = listaDeNotasEMedias[0];
    //const notas = listaDeNotasEMedias[1];
    const [alunos, notas] = listaDeNotasEMedias; // mesmo que a de cima

    const indice = alunos.indexOf(aluno);
    const mediaAluno = notas[indice];

    console.log(`${aluno} esta com a media ${mediaAluno}`);
  } else {
    console.log(`${aluno} não esta cadastrado`);
  }
}

exibeNomeENota("Juliana");
