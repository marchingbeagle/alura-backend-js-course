const notas = [10, 6.5, 8, 7.5];
let mediaParcial = 0;

for (let nota of notas) {
  mediaParcial += nota;
}
const mediaFinal = mediaParcial / notas.length;
console.log(`A media das notas é ${mediaFinal}`);
