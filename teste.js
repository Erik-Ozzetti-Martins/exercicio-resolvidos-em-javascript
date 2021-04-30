// let par = 6;
// for (let i = 1 ;i <=par;i++ ){
//   if (i % 2 ==0){
//     console.log(i)
//   }
// }  

let lista = [-5, 0, -3, -4,12];

function verifica(lista){
    let par = [];
    let impar = [];
    let positivos = [];
    let negativos = [];
    for (let i =0; i < lista.length; i++){
        if(lista[i]>0 || lista[i] ===0){
            positivos.push(lista[i])           
        }else if (lista[i]< 0 ){
            negativos.push(lista[i])
        }else if(lista[i] % 2== 0){
            par.push(lista[i])
        }else if(lista[i]%2 !=0){
            impar.push(lista[i])
        }    
    }
    
   
    console.log(positivos)
    console.log(negativos)
}



function parOuImpar (lista){
    let par = [];
    let impar = [];
  
    for (let i =0; i < lista.length; i++){       
        if(lista[i] % 2== 0){
            par.push(lista[i])
        }else if(lista[i]%2 !=0){
            impar.push(lista[i])
        }    
    }
    
    console.log(par);
    console.log(impar);
}    
parOuImpar(lista)