/* 
serve para fazer coisas assicronas em sicronas e tambem substituira a function callback, basicamente ele vai tornar mais facil nossa vida e evitar uma confusão de callbacks
*/
function rand(min, max) {
	// * 1000 pq timeout se baseia em milissegundo ou seja 1000 é igual a 1 segundo.
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}
const randBoolean = () => {
	const randomNumber = Math.floor(Math.random() * 10);
	return randomNumber % 2 === 0 ? true : false;
};
// promisse temos a function resolve que trata quando dá certo as coisas e reject quando dá erro!
// nao ha necessidade de ser resolve e reject, eh apenas uma convencao(geralmente usado por muitos)
function waitHere(msg, time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof msg !== 'string') {
				reject('CAÍ NO ERRO');
				return;
			}
			// reject vai direto pro catch;
			// eh onde minha promessa vai cair, ou seja, onde eu sei que ira demorar para "resolver";
			// um resolve cai no then que cai em outro then e assim por diante.
			resolve(msg.toUpperCase() + ' - Passei pelo Promise');
		}, time);
	});
}
// .then() é uma funcao que executa a proxima função ou elemento e temos o .catch() para pegar o erro
// é necessario ter parametro dentro do then, pois ele pega os dados do then anterior atraves do parametro atual
/*
waitHere('Conexao com o BD', rand(1, 3))
	.then((answer) => {
		console.log(answer);
		return (
			waitHere('Buscando dasdos no BD', rand(1, 3))
				.then((answer) => {
					console.log(answer);
					return waitHere(2, rand(1, 3)); // Substitui 'Tratando os dados' por numero para dar erro
				})
				.then((answer) => {
					console.log(answer);
					return waitHere('Imprimindo os dados na tela!', rand(1, 3));
				})
				// coloquei nome diferente só pra fica claro que pode estar escrito qualquer coisa, que ele ainda vai apontar para os valores a cima
				.then((asw) => {
					console.log(asw);
				})
				.then(() => {
					console.log('Acabou!!!');
				})
		);
	})
	.catch((e) => {
		console.log('ERRO:', e);
	});
*/

/* promises ageis */

// Promise.all resolve todas as promessas que estão no array
/* 
const promises = [
	'Primeiro valor',
	waitHere('promise 1', 1000),
	waitHere('promise 2', 500),
	waitHere('promise 3', 2000),
	// waitHere(5, 2000),
	'Outro valor',
];
Promise.all(promises)
	.then(function (value) {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	}); 
*/

// Promise.race -> é como uma corrida onde a primeira a ser resolvida será entregue
// tenha cuidado com o que não é Promise, pois será executado primeiro e no caso no race o mesmo será impresso primeiro!
/*
const promises = [
	waitHere('promise 1', rand(1, 3)),
	waitHere('promise 2', rand(1, 3)),
	waitHere('promise 3', rand(1, 3)),
	waitHere(5, rand(1,3)),
];
Promise.race(promises)
	.then(function (value) {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});
*/
// Promise.resolve -> vai me jogar a Pomise resolvida logo de cara
// Promise.reject -> vai retornar logo de cara o erro
function baixaPagina() {
	const emCache = randBoolean(); // caso a pagina já esteja baixada, isso pode ser indentificado no server de caches
	return emCache
		? Promise.resolve('Página em cache')
		: waitHere('Baixando página', 2000);
}
baixaPagina()
	.then((result) => {
		console.log(result);
	})
	.catch((e) => console.log('Error:', e));
