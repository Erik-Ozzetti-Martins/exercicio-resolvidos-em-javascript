/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/
function calculaMediaDeVetor(lista) {
    let total = 0
    lista.forEach((valor) => {
        total +=valor
    });
    console.log(`${total / lista.length}`)
}
calculaMediaDeVetor([1, 2, 3])
