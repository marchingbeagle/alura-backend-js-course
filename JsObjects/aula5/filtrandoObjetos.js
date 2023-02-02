const clientes = require("./cliente.json");

function comApSemComplemento() {
  return clientes.filter((cliente) => {
    return (
      !cliente.endereco.hasOwnProperty("complemento") &&
      cliente.endereco.apartamento
    );
  });
}

console.log(comApSemComplemento());
