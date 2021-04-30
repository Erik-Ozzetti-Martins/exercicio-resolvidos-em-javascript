/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)

}
function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao 
}

let juroSimpl = function (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)

}

let juroComp = function (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao 
}


let juroSimp = (capitalInicial, taxaDeJuros, tempoDeAplicacao)=> {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)

}

let JuroCompost = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao 
}

console.log(jurosSimples(100, 10/100,2))
console.log(jurosComposto(100, 10/100, 2))

console.log(juroSimpl(100, 10/100, 2))
console.log(jurosComp(100, 10/100, 2));


console.log(jurosSimp(100, 10/100,2))
console.log(jurosCompost(100, 10/100, 2))

