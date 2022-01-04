const mostraHora = () => {
	let data = new Date();

	/*return console.log(
		data.toLocaleTimeString('pt-BR', {
			hour12: false,
		})
	);*/

	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
	});
};
//  há 2 formas de usar o setInterval e/ou setTimeout
// setInterval(mostraHora, 1000); -> aqui é loop onde sua repetição baseia-se no tempo e milissegundos.

// setTimeout(mostraHora, 1000); -> ela meio que espera algo ser executado e encerra a operação no tempo determinado em milissegundos.

const atualHora = setInterval(function () {
	console.log(mostraHora());
}, 1000);

setTimeout(function () {
	// esse clear... é uma função nativa do JS.
	clearInterval(atualHora);
}, 3000);

setTimeout(function () {
	console.log('ola mundo!!!');
}, 4000);
