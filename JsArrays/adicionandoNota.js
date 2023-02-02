const notas = [10,6,8]
notas.push(7) // adiciona 7 ao final do array
// pode usar push mesmo o array sendo uma const

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)