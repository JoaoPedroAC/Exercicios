function criaPessoas(nome, sobrenome) {
	return { nome, sobrenome };
}
function dadosPessoas() {
	// se não retornar dará undefined
	return [criaPessoas('João', 'Almeida'), criaPessoas('Johnatan', 'Silver')];
}
console.log(dadosPessoas()[0]);

function falaFrase(inicio) {
	function falaResto(fim) {
		return `${inicio} ${fim}`;
	}
	return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto);

/* Fazendo um multiplicador */
function criaMultiplicador(multiplicador) {
	return function (numero) {
		return numero * multiplicador;
	};
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(10));
console.log(quadruplica(50));
