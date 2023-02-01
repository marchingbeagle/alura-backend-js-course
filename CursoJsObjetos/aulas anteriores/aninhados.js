const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

// atribuindo o endereõ depois
cliente.endereco = {
  rua: "Roger Silva",
  numero: 1337,
  apartamento: true,
  complemento: "Casa de tijolo",
};

console.log(cliente.endereco);
console.log(cliente.endereco.rua);
