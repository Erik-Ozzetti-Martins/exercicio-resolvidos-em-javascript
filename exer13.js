/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
*/

function classificaDia(num) {


    if(num === 2 || num === 3 || num ===  4 || num ===5 || num === 6) return 'Dia util';
    if(num === 1 || num === 7) return 'Fim de semana'
    else return "Dia invalido"

}

function verificaSeEDiaDaSemana (dia) {

    const diaDaSemama = dia >= 2 && dia <= 6;
    const fimDeSemana = dia === 1 || dia === 7;
    const diasInvalido = dia <= 0  || dia >=8 || dia ===typeof 'String';

    if (diaDaSemama){
        return 'Dia Util'
    }

    if (fimDeSemana) {
        return 'Fim de semana'
    }

    if (diasInvalido) {
        return 'Dia Invalido'
    }

}
// console.log(classificaDia(1));
// console.log(classificaDia(2));
// console.log(classificaDia(3));
// console.log(classificaDia(4));
// console.log(classificaDia(5));
// console.log(classificaDia(6));
// console.log(classificaDia(7));
// console.log(classificaDia('a'));


console.log(verificaSeEDiaDaSemana(1));
console.log(verificaSeEDiaDaSemana(2));
console.log(verificaSeEDiaDaSemana(3));
console.log(verificaSeEDiaDaSemana(4));
console.log(verificaSeEDiaDaSemana(5));
console.log(verificaSeEDiaDaSemana(6));
console.log(verificaSeEDiaDaSemana(7));
console.log(verificaSeEDiaDaSemana('a'));
