// EX 1:
console.log("EX 1:")
lista = [10,12,15,35,40]

// Função 1:

media = 0
media = lista.reduce((acumulador,atual) => acumulador + atual, 0)/lista.length
valorMaior = lista.filter(valor => valor > media)
console.log(`Valor maior que a média: ${valorMaior}`)

// Função 2:

function menorValor(lista){
    return lista.reduce((menor, atual) => {
        if (atual < menor) {
          return atual;
          console.log(menor)
          console.log(atual)
        } else {
          return menor;
        }
      });
}
const menor = menorValor(lista)
console.log(`Menor valor: ${menor}`)

// Função 3:

soma = 0
soma = lista.reduce((acumulador,atual) => acumulador + atual, 0)
console.log(`Valor da soma: ${soma}`)

// Função 4:

const menorVal = lista => lista.filter(valor => valor > 20)
console.log(`Valores maiores que 20: ${menorVal(lista)}`)
console.log(" ")

// EX 2:
console.log("EX 2:")
lista2 = [5,12,12,7,9]

console.log(`Primeiro: ${lista2[0]}`)
const resto = lista2.filter(val => val != lista2[0])
console.log(`Restante: ${resto}`)
