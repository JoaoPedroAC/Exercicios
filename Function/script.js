/*
Declaração de função (function hoisting), a engine do JS faz com que esse tipo de function ponha em primeiro lugar a function permitindo isso:
*/
falaOi();

function falaOi() {
	console.log('Ola pessoal');
}

/* 
First-Class Object (objeto dde primeira classe);
Function Expression é quando a variavel passa a ser uma função.
O nome da função pode ter um nome, porem nao serveria de nada, pois o nome da propria variavel ja serve como nome para a funtion!
*/
const souUmDado = function () {
	console.log('Sou um dado!');
};
souUmDado();

/* Arrow Function */
const funcaoArrow = () => {
	console.log('Sou uma arrow function');
};
// funcaoArrow();

/* Aqui a funtion chama por outra atraves de parametro */
function comParametro(funcao) {
	console.log('Chamando outra funcção...');
	funcao();
}
comParametro(funcaoArrow);

/* function dentro de um objeto */

const obj = {
	/* pode ser assim */
	fala: function () {
		console.log('Estou falando...');
	},
	/* ou assim */
	falaMuito() {
		console.log('Estou falando Muito mesmo!!!!');
	},
};
obj.fala();
obj.falaMuito();

/* aqui dará um erro pois arguments não é compativel com Arrow Function */
// const tetativa = () => {
// 	console.log(arguments);
// 	throw 'arguments só funciona em funções tipo function e não em Arrow function';
// };
// try {
// 	tetativa();
// } catch (err) {
// 	console.log(err);
// }
/* Para contornar o arguments foi criado o rest operator que pode ser passado nos parametros e functiona igual e em qualquer um dos tipos de function */

const seiLa = (...parametros) => {
	console.log(parametros[3]);
};
seiLa('Oi', 20, 30, 'Juscrabilos');
