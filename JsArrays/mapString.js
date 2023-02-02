// O objetivo é padronizar a questao das letras maiusculas no array

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesCorrigidos = nomes.map((nome) => {
  return nome.toUpperCase();
});

console.log(nomesCorrigidos);
