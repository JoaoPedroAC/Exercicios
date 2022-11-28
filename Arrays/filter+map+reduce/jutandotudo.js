/* RETORNE A SOMA DO DOBRO DE TODOS OS PARES */
// 1º filtre quem eh par e qm não eh;
// 2º dobrar somente os valores pares;
// 3º somar os nuemros dobrados.
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter so retorna quando é boolean true
const numerosPares = numeros
	.filter((valor) => valor % 2 === 0)
	.map((valor) => valor * 2)
	.reduce((acumulator, valor) => acumulator + valor);

// out pares --> [ 0, 2, 4, 6, 8 ]
// out dobro dos pares  --> [ 0, 4, 8, 12, 16 ]
// out soma de todos os valores dobrados  --> 40
console.log(numerosPares);
