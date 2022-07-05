const timeRand = (time = 1) => {
	time *= 1000;
	return Math.floor(Math.random() * time + time);
};
const bd = (txt, time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return typeof txt === 'string'
				? resolve(txt.toUpperCase() + ' - Aceito')
				: reject('FOI REJEITADO');
		}, time);
	});
};
// bd('fase 1', timeRand())
// 	.then((answer) => {
// 		console.log(answer);
// 		return bd('Fase 2', timeRand());
// 	})
// 	.then((step) => {
// 		console.log(step);
// 		return bd('Fase 3', timeRand());
// 	})
// 	.then((step) => {
// 		console.log(step);
// 		return step;
// 	})
// 	.then((step) => console.log('Finalizou em', step))
// 	.catch((e) => console.log('ERROR MESSAGE', e));

/* para substituir esses then, temos o async e await */

async function execute() {
	try {
		// aqui o fase1 apenas esta executando a função sem esperar por uma Promise, ou seja, retornará pendente
		const fase1 = bd('fase 1', 1000);
		console.log(fase1);
		// aqui checamos novamente o fase1 para saber seu resultado
		setTimeout(() => {
			console.log('Estava pendente', fase1);
		}, 3000);

		const fase2 = await bd('fase 2', timeRand());
		console.log(fase2);

		const fase3 = await bd('fase 3', timeRand());
		console.log(fase3);

		console.log('Finalizou em', fase3);
	} catch (e) {
		console.log('ERROR MESSAGE:', e);
	}
}
execute();

/*
Há 3 ou mais estados, mas seus principais são 
pending -> pendente;
fulfilled -> resolvida;
rejected -> rejeitada
*/
