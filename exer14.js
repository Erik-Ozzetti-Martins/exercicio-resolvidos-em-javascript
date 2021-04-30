/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console
*/


function venderFruta(fruta){
    if (fruta === 'maçã'){
        console.log('Não vendemos esta fruta aqui');
    }
    else if(fruta ==='kiwi'){
        console.log('Estamos com escassez de kiwi.');
    }else if (fruta === 'melancia'){
        console.log('Aqui está, sao 3 reais o  quilo')
    }else{
        console.log(console.error())
    } 
}
venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')