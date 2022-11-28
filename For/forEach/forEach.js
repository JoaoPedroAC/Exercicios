const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// recapitulando os for's
/*
for (let numero of numeros) {
	console.log(numero);
} // vai retornar apenas os valores dentro do array
*/
/*
for (let index in numeros) {
	console.log(index);
} // vai retornar apenas os indices dentro do array
*/

// conhecendo o forEach
numeros.forEach((valor, index,array)=> console.log(valor, index))