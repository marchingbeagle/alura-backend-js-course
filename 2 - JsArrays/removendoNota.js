const notas = [10, 7, 8.7, 6.6, 5];
notas.pop(); // remove o ultimo elemento do array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas);
console.log(media);
