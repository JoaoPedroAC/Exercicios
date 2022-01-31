function rand(min = 1000, max = 3000) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}
/* VAMOS INICIAR O CALLBACK HELL */
/* A ideia é fazer com que seja renderizado as functions na ordem correta nao importando a demora para a execução*/
function f1(callback) {
	setTimeout(function () {
		console.log(`Executando F1 - ${Math.floor(rand() / 1000)} seg.`);
		if (callback) callback();
	}, rand());
}
function f2(callback) {
	setTimeout(function () {
		console.log(`Executando F2 - ${Math.floor(rand() / 1000)} seg.`);
		if (callback) callback();
	}, rand());
}
function f3(callback) {
	setTimeout(function () {
		console.log(`Executando F3 - ${Math.floor(rand() / 1000)} seg.`);
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
/* OU ASSIM: (O ARROW FUNCTION NÃO É UMA FUNCTION HOISTING)*/
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