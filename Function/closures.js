// Escopo Goblal
function retornaFuncao(nome) {
	// Escopo da função atual
	// const nome = 'João';
	return function () {
		// Escopo desa função de dentro
		return nome;
	};
}
const funcao = retornaFuncao('João');
const funcao2 = retornaFuncao('Luiz');
// .dir aqui é a mesma coisa que .log
// porem la no console do navegador ele mostra a anonimous function
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(),'e',funcao2())

/* Clousures é a habilidade que a função tem de acessar o escopo léxico */
/* Escopos léxicos são os escopos de tudo, seja dentro de functions, objetos, global e etc */
