/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.

*/
function entraNumerosNegativosNumaLista (lista){
    let numerosNegativos =[];
    for(let i = 0; i < lista.length; i++){
        if (lista[i] < 0 ) numerosNegativos.push(lista[i])
    }
    
    console.log(numerosNegativos.length)
}
let li = [-1, -2, 1, 2, 4, 6, -6, -88]
entraNumerosNegativosNumaLista(li)