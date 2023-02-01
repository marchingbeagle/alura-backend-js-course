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

cliente.enderecos.push({
  rua: "volim rabah",
  numero: 157,
  apartamento: false,
  complemento: "disney",
});

const clientesComApartametno = cliente.enderecos.filter((enderecos) => {
  return enderecos.apartamento === true;
});

console.log(clientesComApartametno);
