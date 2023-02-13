const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// para cada elemento dentro de "notas", a funcao será chamada uma vez

notas.forEach(function (nota) {
  //console.log(nota);
  somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;
console.log(`A media das nota é ${media}`);
