// Exercícios 6 - Operações

// Um produto custa R$120.

// Crie uma variável desconto igual a 20%.

// A pessoa possui somente R$30, após a operação verifique se a pessoa possui dinheiro suficeinte

// Mostre o preço final juntamente com a possibilidae da pessoa poder ou não comprar o produto.

let resultado = 120;
let desconto = 0.2;
let  dinheirodisponivel = 30;
let  preçofinal = resultado * (1 - desconto);

console.log("preçofinal do produto: %d preçofinal *dinheirodisponivel");

if(dinheirodisponivel >= preçofinal){
    
 console.log("Compra aprovada!");

}else{


    console.log("Dinheiro insuficiente");
}

