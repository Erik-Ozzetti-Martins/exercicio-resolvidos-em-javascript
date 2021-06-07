

let lista = [-5, 0, -3, -4, 12 ,3];

function verifica(lista) {
  let par = lista.filter((value) => {
    return value % 2 === 0;
  });
  let impar = lista.filter((value) => {
    return value % 2 !== 0;
  });
  let positivo = lista.filter((value) => {
    return value >= 0;
  });
  let negativo = lista.filter((value) => {
    return value <= 0;
  });

  return `numeros pares ${par}, numeros impares ${impar}, numeros positivos ${positivo}, numeros negativos ${negativo} `
}
console.log(verifica(lista));
