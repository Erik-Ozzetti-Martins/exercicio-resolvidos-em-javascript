/*

02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

function tiposDeTriangulo (ladoA, ladoB, ladoC) {
    const tresLadosIguais = ladoA === ladoB && ladoA === ladoC;
    const doisLadosIguais = ladoA === ladoB || ladoA ===ladoC || ladoB === ladoC;
    const ladosTotalmenteDiferentes =ladoA !== ladoB && ladoA !== ladoC && ladoB != ladoC;
    
    if(tresLadosIguais){
        console.log("E triangulo Equilatero")
        return;
    }

    if (doisLadosIguais){
        console.log("E triangulo Isosceles");
        return;
    }
    
    if (ladosTotalmenteDiferentes){
        console.log("E triangulo Escaleno");
        return
    }
    
    return console.log('Nao forma um triangulo');

}


let verifica = function (ladoA, LadoB,ladoC) {
    const tresLadosIguais = ladoA === ladoB && ladoA === ladoC;
    const doisLadosIguais = ladoA === ladoB || ladoA ===ladoC || ladoB === ladoC;
    const ladosTotalmenteDiferentes =ladoA !== ladoB && ladoA !== ladoC && ladoB != ladoC;

    if(tresLadosIguais){
        console.log("E triangulo Equilatero")
        return;
    }

    if (doisLadosIguais){
        console.log("E triangulo Isosceles");
        return;
    }
    
    if (ladosTotalmenteDiferentes){
        console.log("E triangulo Escaleno");
        return
    }
    
    return console.log('Nao forma um triangulo');
}



let tipoDeTriangulo = (ladoA,ladoB, ladoC) => {
    const tresLadosIguais = ladoA === ladoB && ladoA === ladoC;
    const doisLadosIguais = ladoA === ladoB || ladoA ===ladoC || ladoB === ladoC;
    const ladosTotalmenteDiferentes =ladoA !== ladoB && ladoA !== ladoC && ladoB != ladoC;
    
    if(tresLadosIguais){
        console.log("E triangulo Equilatero")
        return;
    }
    
    if (doisLadosIguais){
        console.log("E triangulo Isosceles");
        return;
    }
    
    if (ladosTotalmenteDiferentes){
        console.log("E triangulo Escaleno");
        return
    }
    
    return console.log('Nao forma um triangulo');
    
}

tiposDeTriangulo(5, 5 ,5);
tiposDeTriangulo(1, 4, 1);
tiposDeTriangulo(4,5,8);
verifica (3,5,6)
tipoDeTriangulo()