const cliente = {
  nome: "André",
  idade: 32,
  cpf: "312313123",
  email: "andre@gmail.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]}, essa pessoa tem ${cliente["ida"]}`
);

console.log(
  `Os 3 primeiros digitos do cpf desse clente são ${cliente["cpf"].substring(
    0,
    3
  )}`
);
