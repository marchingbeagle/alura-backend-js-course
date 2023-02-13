  const number1 = 456
const numberString = "456"
const namString = "123a"

console.log(number1 === numberString) // false

console.log(number1 == numberString) // true

console.log(number1 + numberString) // 456456

console.log(number1 + Number(numberString)) // 912

console.log(Number(namString)) // NaN

console.error("Deu erro fml")