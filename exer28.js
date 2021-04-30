/*
 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

*/
function quantosnNumerosParesEimpares(lista){
    let pares = [];
    let impares = [];
    for (let i = 0; i < lista.length ; i++){
        if(lista[i]% 2 === 0){
             pares.push(lista[i])
        }else if (lista[i] % 2 !==0){
           impares.push(lista[i])
        }
    }
    console.log(`Tem ${pares.length} numeros pares e ${impares.length} impares `)
}

quantosnNumerosParesEimpares([1, 2, 3, 4, 5, 6, 7, 8,12])

