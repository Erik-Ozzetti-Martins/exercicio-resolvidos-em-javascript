/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores
*/
function operacoesBasicas(x = 0, y = 0) {
    let soma = x + y;
    let subtracao = x -y;
    let multiplicacao = x * y;
    let divisao = x / y;
    console.log(`A soma: ${soma}\nsubtracao:${subtracao}\n multiplicação${multiplicacao}\ndivisao ${divisao}\n`)
}


let operacoesBasic = function (x = 0, y = 0) {
    let soma = x + y;
    let subtracao = x - y;
    let multiplicacao = x * y;
    let divisao = x / y;
    
    console.log(`a soma:${soma} \nsubtracao:${subtracao}\nmultiplicao:${multiplicacao}\ndivisao:${divisao}\n`)
    
}

let basicos = (x, y) => {
    let soma = x + y;
    let subtracao = x - y;
    let multiplicacao = x * y;
    let divisao = x / y;
    
    console.log(`a soma:${soma} \nsubtracao:${subtracao}\nmultiplicao:${multiplicacao}\ndivisao:${divisao}`)

}


operacoesBasicas(6, 9);
operacoesBasic(5,7);
basicos(10,7);