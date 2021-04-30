/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function paresentre1E100 (){
    let pares = []
    for (let i = 0; i <= 100;i++) {
        if( i % 2 ===0 ){
        pares.push(i)
        }
    }
    console.log(pares)
}
paresentre1E100()