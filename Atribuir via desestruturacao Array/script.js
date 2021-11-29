// exercicio de inverter as atribuições - ordem impressa B, C, A
/*
let a = 'A';
let b = 'B';
let c = 'C';
// [a, b, c] = ['B', 'C', 'A'];
// reatribuindo.
const letters = [b, c, a];
[a, b, c] = letters;
// const order = [a, b, c] = letters;
console.log(a, b, c);
*/

// temos uma corrida ao qual os participantes tinham roupas com alfabeto
/*
const participantes = ['A', 'B', 'C', 'D', 'E', 'F'];
//  existe ...rest(resto), ...spread(espalhar).
const [first, second, , third, ...others] = participantes;
console.log(third);
*/

// dá pra fazer com array dentro de array, vamos usar sistemas de casas dentro de uma quadra
const quadras = [
	[0, 1, 2],
	[300, 45, 21],
	[65, 87, 900],
];
const [casas1, casas2, casas3] = quadras;
console.log(casas2[0]);
