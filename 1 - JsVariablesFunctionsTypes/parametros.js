function sum(number1,number2){
  return number1+number2
}

//console.log(sum(1,2)) // numeros escolhidos para serem somados, devem ser colocados nos respectivos parametros
//console.log(sum(2,5555))
//console.log(sum(255,-55))


function text(name,age){
  return `My name is ${name}, i'm ${age} years old`
}
console.log(text("Erik","18"))



function mult(number1 = 1,number2 = 1){
  return number1 * number2
}
console.log(mult(sum(1,2),sum(4,5)))