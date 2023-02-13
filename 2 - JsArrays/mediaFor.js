const notas = [10, 6.5, 8, 7.5];
const mediaFinal = media() / notas.length;

console.log(`A media das notas é ${mediaFinal}`);

function media() {
  let = mediaparcial = 0;
  for (i = 0; i < notas.length; i++) {
    mediaparcial += notas[i];
  }
  return mediaparcial;
}
