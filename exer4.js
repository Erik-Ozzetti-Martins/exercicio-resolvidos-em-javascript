/*

04)  Crie uma função que irá receber dois valores,
o dividendo e o divisor.
    A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

*/
function resolveDivisaoEMostraResto (dividendo, divisor){
    let divisao  = dividendo / divisor
    let resto =dividendo % divisor
    console.log(`resultado da divisao:${divisao.toFixed(0)} \nresto:${resto}`) 
}

let resolDivissaoEMostra = function (dividendo, divisor) {
    let divisao  = dividendo / divisor
    let resto =dividendo % divisor
    console.log(`resultado da divisao:${divisao.toFixed(0)} \nresto:${resto}`) 
}

let divisaoEResto = (divisao, dividendo) => {
    let divisao  = dividendo / divisor
    let resto =dividendo % divisor
    console.log(`resultado da divisao:${divisao.toFixed(0)} \nresto:${resto}`) 
}

divisaoEResto(12,3)
resolveDivisaoEMostraResto(10,3)
resolDivissaoEMostra(10,2)