/* o uso de arguments so funciona para function (neste caso em especifico)*/
function funcao() {
	let total = 0;
	for (let argumento of arguments) {
		total += argumento;
	}
	console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

/* faremos uma soma simples */
// os valores definidos dentro do parametro é para casos em que ninguem de o valor pasras as variaveis de parametro.
function soma(a, b = 2, c = 5) {
	console.log(a + b + c);
}
soma(99, 50);

/* usando o rest operator(ele deve ser sempre o ultimo no parametro) */
function conta(operador, acumulador, ...numero) {
	for (let numeros of numero) {
		if (operador === '+') acumulador += numeros;
		if (operador === '-') acumulador -= numeros;
		if (operador === '/') acumulador /= numeros;
		if (operador === '*') acumulador *= numeros;
	}
	console.log(acumulador);
}
conta('*', 1, 20, 30, 55, 4722);

/* function com objetos tem que aplicar a desetruturação*/
function objtos({ nome, sobrenome, idade }) {
	console.log(nome, sobrenome, idade);
}
objtos({ nome: 'João', sobrenome: 'Pedro', idade: 21 });
// Ou podemos usar assim
let obj = { nome: 'Joshua', sobrenome: 'Carlittos', idade: 2000 };
objtos(obj);

/* function com arrays tem que aplicar a desetruturação*/
function arrays([valor1, valor2, valor3]) {
	console.log(valor1, valor2, valor3);
}
arrays(['Carlittos', 'Josephinna', 'Mario']);