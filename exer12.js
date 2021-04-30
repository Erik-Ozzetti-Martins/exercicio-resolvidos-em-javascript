/*
12)​ Faça um algoritmo que calcule o fatorial de um número.

*/ 


function fatorial(fat) {
  let fatorial = 1;
  for (let i = 1; i <= fat; i++) {
    fatorial *= i;
  }
  console.log(fatorial);
}
fatorial(4);
