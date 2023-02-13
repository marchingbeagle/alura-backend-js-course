const dados = require("./cliente.json");
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

const clienteEmObjeto = JSON.parse(clienteEmString);
console.log(clienteEmObjeto);
