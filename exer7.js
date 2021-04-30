/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

*/
function resolveFormuladaDeBhaskara(ax2, bx, c) {
  let resolveDelta = bx ** 2 - 4 * ax2 * c;
  if (resolveDelta > 0) {
    let x1 = (-bx + Math.sqrt(resolveDelta)) / (2 * ax2);
    let x2 = (-bx - Math.sqrt(resolveDelta)) / (2 * ax2);
    return `x1: ${x1} x2: ${x2}`;
  } else {
    return "Delta e negativo ";
  }
}

let FormuladaDeBhaskara = function(ax2, bx, c) {
  let resolveDelta = bx ** 2 - 4 * ax2 * c;
  if (resolveDelta > 0) {
    let x1 = (-bx + Math.sqrt(resolveDelta)) / (2 * ax2);
    let x2 = (-bx - Math.sqrt(resolveDelta)) / (2 * ax2);
    return `x1: ${x1} x2: ${x2}`;
  } else {
    return "Delta e negativo ";
  }
}


let Bhaskara = (ax2, bx, c) => {
  let resolveDelta = bx ** 2 - 4 * ax2 * c;
  if (resolveDelta > 0) {
    let x1 = (-bx + Math.sqrt(resolveDelta)) / (2 * ax2);
    let x2 = (-bx - Math.sqrt(resolveDelta)) / (2 * ax2);
    return `x1: ${x1} x2: ${x2}`;
  } else {
    return "Delta e negativo ";
  }
}


console.log(resolveFormuladaDeBhaskara(4, 2, -6))
console.log(FormuladaDeBhaskara(4, 2 -6))
console.log(Bhaskara(4, 2 -6 ))

