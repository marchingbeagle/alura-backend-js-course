const bookList = require("./array");

function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, middle));
    const part2 = mergeSort(array.slice(middle, array.length));
    array = sort(part1, part2);
  }
  return array;
}

function sort(part1, part2) {
  let posPart1 = 0;
  let posPart2 = 0;
  const result = [];

  while (posPart1 < part1.length && posPart2 < part2.length) {
    let elementPart1 = part1[posPart1];
    let elementPart2 = part2[posPart2];

    if (elementPart1.preco < elementPart2.preco) {
      result.push(elementPart1);
      posPart1++;
    } else {
      result.push(elementPart2);
      posPart2++;
    }
  }
  return result.concat(
    posPart1 < part1.length ? part1.slice(posPart1) : part2.slice(posPart2)
  );
}

console.log(mergeSort(bookList));
