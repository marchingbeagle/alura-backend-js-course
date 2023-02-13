// Convert the price from USD to BRL using map()

const usdPrice = 5.07;

const products = [
  {
    name: "Notebook",
    price: 350,
  },
  {
    name: "Tablet",
    price: 499,
  },
  {
    name: "Phone",
    price: 750,
  },
  {
    name: "Desktop",
    price: 1000,
  },
];

const priceInBrl = products.map((Element) =>
  (Element.price * usdPrice).toFixed(2)
);

console.log(priceInBrl);
