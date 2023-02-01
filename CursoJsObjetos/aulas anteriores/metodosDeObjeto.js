const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

const chavesDoObjeto = Object.keys(cliente); // retorna um array cm todas as chaves do cliente

if (!chavesDoObjeto.includes("enderecos")) {
  console.log("É necesário ter um endereço cadastrado.");
} else {
  console.log(chavesDoObjeto);
}
