/* 
serve para substituir a function callback, basicamente ele vai tornar mais facil nossa vida e evitar uma confusão de callbacks
*/
function rand(min, max) {
	// * 1000 pq timeout se baseia em milissegundo ou seja 1000 é igual a 1 segundo.
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}
// promisse temos a function resolve que trata quando dá certo as coisas e reject quando dá erro!
// nao ha necessidade de ser resolve e reject, eh apenas uma convencao(geralmente usado por muitos)
function waitHere(msg, time) {
	return new Promise((resolve, reject) => {
		if (typeof msg !== 'string') reject('VALUE IS NOT CORRECT');
		setTimeout(() => {
            // reject vai direto pro catch;
            // eh onde minha promessa vai cair, ou seja, onde eu sei que ira demorar para "resolver";
            // um resolve cai no then que cai em outro then e assim por diante. 
			resolve(msg);
		}, time);
	});
}
// .then() é uma funcao que executa a proxima função ou elemento e temos o .catch() para pegar o erro
// é necessario ter parametro dentro do then, pois ele pega os dados do then anterior atraves do parametro atual
waitHere('Conexao com o BD', rand(1, 3))
	.then((answer) => {
		console.log(answer);
		return waitHere('Buscando dasdos no BD', rand(1, 3))
			.then((answer) => {
				console.log(answer);
				return waitHere(2, rand(1, 3)); // Substitui 'Tratando os dados' por numero para dar erro
			})
			.then((answer) => {
				console.log(answer);
				return waitHere('Imprimindo os dados na tela!', rand(1, 3));
			})
			.then((asw) => {
				console.log(asw);
			})
			.then(() => {
				console.log('Acabou!!!');
			});
	})
	.catch((e) => {
		console.log('ERRO:', e);
	});
