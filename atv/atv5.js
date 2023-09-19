import PromptSync from "prompt-sync"
const prompt = PromptSync()

// EX. 1:

    console.log("Exercício 1:")
function calcularPrecoDesc(valor, quantidade, callback){
    const total = valor * quantidade
    return callback(total)
}

function desc(total){
    const desconto = 0.10
    const precoTotal = total * (1 - desconto)
    return precoTotal
}

    const valor = Number(prompt("Digite o valor "))
    const quantidade = Number(prompt("Digite a quantidade "))

    let valorNovo = calcularPrecoDesc(valor,quantidade,desc)

    console.log(`O valor com desconto é ${valorNovo}`)

// EX. 2:

    const matriz = [
    [5,10,12],
    [2,9,11],
    [15,8,6]
    ]
    
    console.log("Exercício 2:")
    matriz.forEach(function (linha) {
        linha.forEach(function (valor) {
          if (valor > 10) {
            console.log(valor);
          }
        });
      });