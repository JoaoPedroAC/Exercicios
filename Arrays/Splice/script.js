//              -5      -4        -3         -2        -1
//               0       1         2          3         4
const nome = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
// .splice(indice atual, quantos serão deletados, adiciona element1, element2,...);

// Esse metodo vai remover do array o elemento solicitado!

// dá para vermos os elementos removidos;

// podemos deletar mais de 1 elemento pegando começando no indicie apontado em diante;

// podemos add alementos onde quisermos, basta apenas apontar para qual indice esse elemento irá morar;

// podemos adicionar outros elementos no indice que apontarmos, se nao remover o elemento que está no lugar ele será empurrado.

/* 
// Exemplos básicos
const removed = nome.splice(3, 1, 'Pedro');
console.log(nome);
console.log(removed);
*/

/*
// simulando o método .pop() -> remove o último
const removed = nome.splice(-1, 1);
console.log(nome);
console.log(removed);
*/

/*
// simulando o método .shift() -> remove o primeiro
const removed = nome.splice(0, 1);
console.log(nome);
console.log(removed);
*/
/*
// simulando o .push() -> add no final
const removed = nome.splice(nome.length, 0, 'Eliel');
console.log(nome);
console.log(removed);
*/
/*
// simulando o .unshift() -> add no começo
const removed = nome.splice(0, 0, 'Arthur');
console.log(nome);
console.log(removed); 
*/
