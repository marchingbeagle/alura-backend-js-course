const notas = [7, 7, 8, 9];

const novasNotas = [...notas]; // copia os valores de "notas" para dentro de "novasNotas"

novasNotas.push(10);

console.log(`As notas antigas são ${notas}`);
console.log(`As novas notas são ${novasNotas}`);
