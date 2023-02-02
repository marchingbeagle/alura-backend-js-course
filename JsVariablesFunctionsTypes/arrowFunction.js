function apresentar(name){
  return `My name is ${name}`
}
console.log(apresentar("Erik"))



const apresentarArrow = name => `My name is ${name}`
console.log(apresentarArrow("Erik"))

const soma = (number1, number2) => number1 + number2
console.log(soma(1,2)) 



const sum = (number1,number2) => {
  if(number1 >10 || number2 > 10){
    return "Numbers bigger than 10"
  }else{
    return number1 + number2
  }
}
console.log(sum(8,8))

