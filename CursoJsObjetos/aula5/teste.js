const clientes = require("./cliente.json");

function comDoisTelefones() {
  return clientes.filter((cliente) => typeof cliente.telefone !== Array);
}

console.log(comDoisTelefones());
