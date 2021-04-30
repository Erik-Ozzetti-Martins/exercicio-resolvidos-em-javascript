/*
40) ​ Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.

*/

function conceito(lista) {
    let conceitos = [];
    for(let i = 0; i < lista.length;i++){
        if(lista[i] >= 0 && lista[i] <= 4.9){
            conceitos.push('D');
        }else if(lista[i]>= 5 &&lista[i] <= 6.9){
            conceitos.push('C');
        }else if(lista[i] >= 7 &&lista[i] <= 8.9){
            conceitos.push('B');
        }else if(lista[i] >=9 &&lista[i] <= 10){
            conceitos.push('A')

        }else{
            conceitos.push('nota invalida');
        }
    }
    return conceitos

}


let notas = [1, 2, 3, 4, 5, 6, 7, 8 ,9,10, 11,-1 ]; 
console.log(conceito(notas));


