/*
 Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

*/

function numeroEDivisilporTres(num) {
  return num % 3 === 0 ? true : false
}

const diviPorTres = function (num) {
  return num % 3 === 0 ? true : false
}

const disivelPorTres = (num) => (num % 3 === 0 ? true : false)

console.log(numeroEDivisilporTres(18))
console.log(diviPorTres(15))
console.log(disivelPorTres(21))

