function rand(min = 1000, max = 3000) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}
/* VAMOS INICIAR O CALLBACK "HELL"(HELL é pq é uma bagunça mental rsrs) */
/* A ideia é fazer com que seja renderizado as functions na ordem correta nao importando a demora para a execução, isso é como o banco de dados, pois não dá para dimencionar o quanto demoraria, assim evitando diversos erros, caso uma coisa ocorresse antes do BD!*/
function f1(callback) {
	setTimeout(function () {
		console.log(`Executando F1 - ${(rand() / 1000).toFixed(1)} seg.`);
		if (callback) callback();
	}, rand());
}
function f2(callback) {
	setTimeout(function () {
		console.log(`Executando F2 - ${(rand() / 1000).toFixed(1)} seg.`);
		if (callback) callback();
	}, rand());
}
function f3(callback) {
	setTimeout(function () {
		console.log(`Executando F3 - ${(rand() / 1000).toFixed(1)} seg.`);
		if (callback) callback();
	}, rand());
}

/* PODE SER ASSIM: */
// f1(function () {
// 	f2(function () {
// 		f3(function () {
// 			console.log('Terminou pessoal');
// 		});
// 	});
// });
/* OU ASSIM: (O ARROW FUNCTION NÃO É UMA FUNCTION HOISTING, OU SEJA, VC NÃO CONSEGUE CHAMA-LA ANTES DE DECLARAR A FUNCTION)*/
f1(f1Callback);
function f1Callback() {
	f2(f2Callback);
}
const f2Callback = () => {
	f3(f3Callback);
};
const f3Callback = () => {
	console.log('Terminou again!!!');
};
/* HÁ UMA MANEIRA MAIS FACIL E CLEAN DE FAZER ISSO, QUE É USANDO O "PROMISE" */
