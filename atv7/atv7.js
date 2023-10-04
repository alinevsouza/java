// EX 1. Crie quatro funções (somar, subtrair, dividir e multiplicar).
// Em seguida faça uma função chamada calcular(), essa função deve receber
// 3 parâmetros, valor A, valor B e a função callback que será executada.

console.log("EX.1")
function soma(a, b) {
  return a + b;
}

function subt(a, b) {
  return a - b;
}

function div(a, b) {
  if (b === 0) {
    console.log("Impossível dividir por 0");
  }
  return a / b;
}

function multip(a, b) {
  return a * b;
}

function calc(a, b, callback) {
  if (typeof callback === 'function') {
    return callback(a, b);
  } else {
    console.log("É necessário que o terceiro parâmetro seja uma função");
  }
}

const resultadoSoma = calc(121, 11, soma);
console.log("Soma:", resultadoSoma);

const resultadoSubt = calc(121, 11, subt);
console.log("Subtração:", resultadoSubt);

const resultadoDiv = calc(121, 11, div);
console.log("Divisão:", resultadoDiv);

const resultadoMultip = calc(121, 11, multip);
console.log("Multiplicação:", resultadoMultip);

console.log(" ")

// EX 2. Crie uma classe Cliente, essa classe deve ter nome, telefone, 
// renda e e-mail como atributos e um método verificarCredito(), esse método deve retornar
// uma promise que retorna: Crédito aprovado (renda > 2000) ou Crédito recusado (renda < 2000)

console.log("EX.2")
class Cliente {
    constructor(nome, telefone, renda, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.renda = renda;
      this.email = email;
    }
  
    verCred() {
      return new Promise((resolve, reject) => {
        if (this.renda > 2000) {
          resolve("Aprovado");
        } else {
          reject("Recusado");
        }
      });
    }
  }
  
 
  const cliente01 = new Cliente("Aline Souza", "097069-5899", 5000, "avs@email");
  cliente01.verCred()
    .then((mensagem) => {
      console.log(`${cliente01.nome} = ${mensagem}`);
    })
    .catch((mensagem) => {
      console.log(`${cliente01.nome} = ${mensagem}`);
    });
