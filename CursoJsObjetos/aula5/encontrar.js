const clientes = require("./cliente.json");

function encontrar(clientes, Chavenomes, nome) {
  return clientes.find((item) => item[Chavenomes].includes(nome));
}

console.log(encontrar(clientes, "nome", "Kirby"));
