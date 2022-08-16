/* Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menor */

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 3, 2, 5, 8, 7, 11, 15, 22, 27];

// Para caso de usar essa function em outros lugares, entao ela term um proposito de existir, mas se não for o caso, entao...
/*
function callbackFilter(value, index, array) {
	return value > 10;
}
*/
// A função filter() precisa de um resultado booleano;

// É passado apenas a referencia da função, pois não queromos que execute logo de cara, mas sim que o filter olhe para dentro da function e depois a execute;

// o filter precisa de uma função callback, seja feita direto nele usando arrow function ou uma function anonima, quanto externo;
/*
const numerosFiltrados = numeros.filter(function (value) {
	return value > 10;
});
*/
/*
const numerosFiltrados = numeros.filter((value, index, array) => {
	console.log(value, '|', index, '|', array);
	value > 10;
});
console.log(numerosFiltrados);
*/

/*
 Retorne as pessoas que tem o nome com 5 letras ou mais;
 Retorne as pessoas com mais de 50 anos;
 Retorne as pessoas cujo nome termina com: a.
*/
const pessoas = [
	{ nome: 'João', idade: 22 },
	{ nome: 'Maria', idade: 50 },
	{ nome: 'Fernando', idade: 13 },
	{ nome: 'Julia', idade: 80 },
	{ nome: 'Leticia', idade: 70 },
	{ nome: 'Karolyna', idade: 23 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasVelhas = pessoas.filter((obj) => obj.idade > 50);
const pessoasComNomeFeminino = pessoas.filter((obj) => obj.nome.endsWith('a'));
console.log(pessoasComNomeFeminino);
