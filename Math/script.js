//  some os numeros utlizando function
function soma(x,y){
    return x + y;
};
console.log(soma(4,5));

//  multiplique os numeros utlizando function
const multiplicar = (x,y) => {
    return x * y;
};
console.log(multiplicar(4,5));

//  divida os numeros utlizando function
// esse tipo de arraw fuction é apenas para algo simples e só aceita 1 parametro!
const divisao = x => x / y;
let y = 5;
console.log(divisao(10));

// pegue o número 10.254568 e o arredonde para cima
const numero1 = parseFloat(10.254568);
let arredondaCima = Math.ceil(numero1);
console.log(arredondaCima);

// pegue o número 9.568 e o arredonde para baixo
const numero2 = parseFloat(9.568);
let arredondaBaixo = Math.floor(numero2);
console.log(arredondaBaixo);

// pegue o número 8.49 e o arredonde para o valor mais proximo
const numero3 = parseFloat(8.49);
let arredondaProximo = Math.round(numero3);
console.log(arredondaProximo);