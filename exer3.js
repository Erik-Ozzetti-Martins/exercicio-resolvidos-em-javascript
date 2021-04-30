/*
 02)Crie uma função que recebe dois parâmetros,
base e expoente, e retorne a base elevada ao expoente
*/
function exponenciacao(base, expoente) {
    return base ** expoente
}

console.log(exponenciacao(2,4))

let expo = function (base, expoente) {
    return base ** expoente 
}

console.log(expo(4,6))

let exponen = (base, expoente) => {
    return base ** expoente
}

console.log(exponen(4,2))