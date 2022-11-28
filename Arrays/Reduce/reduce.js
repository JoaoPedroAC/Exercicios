/*
Reduce ->  assim como o nome diz, ele reduz o array em 1 unico elemento, ele tem poder para fazer tudo o que o filter e map fazem, porem nao eh o ideal!
*/

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 3, 2, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulator, atualValue, index, originalArray) => {
	// console.log(acumulator, '|', atualValue);
	acumulator += atualValue;
	return acumulator;
});
// console.log(total);
/* 
acumula os valores do laço, o zero fora do escopo é o acumulador inicial, e é necessário retorna-lo para que os valores subseguentes, não retornem undefined;
caso não haja o 0 fora do escopo o valor do acumulador será o do 1º indice do array, isso ocorre pq nao eh obrigatorio o acumulador.
caso seja o array vazio o acumulador, ele concatenará, se não houver nenhuma tratativa.
*/
const pares = numeros.reduce((acumulator, atualValue, index, originalArray) => {
	atualValue % 2 === 0 ? acumulator.push(atualValue) : false;
	return acumulator;
}, []);
// console.log(pares);

const dobra = numeros.reduce((acumulator, value) => {
	acumulator.push(value * 2);
	return acumulator;
}, []);
// console.log(dobra);

// Retorne a pessoa mais velha
const pessoas = [
	{ nome: 'João', idade: 22 },
	{ nome: 'Maria', idade: 50 },
	{ nome: 'Fernando', idade: 13 },
	{ nome: 'Julia', idade: 80 },
	{ nome: 'Leticia', idade: 70 },
	{ nome: 'Karolyna', idade: 23 },
];
const moreOld = pessoas.reduce((acumulator, value) => {
    if (acumulator.idade > value.idade) return acumulator;
	return value;
});
console.log(moreOld);
