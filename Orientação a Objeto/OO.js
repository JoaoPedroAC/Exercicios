/*
const pessoa = new Object();
pessoa.nome = 'João';
pessoa.sobrenome = 'Berg';
pessoa.idade = 30;
pessoa.falarNome = function () {
	return `${this.nome} está falando seu nome`;
};
// podemos usar pessoa.nome para algo mais estatico ou podemos utilizar pessoa['nome'] para algo dinamico
console.log(pessoa.falarNome());
*/
// OU
const pessoa = {
	nome: 'João',
	sobrenome: 'Berg',
	idade: 25,
	falarNome() {
		return `${this.sobrenome} está falando seu nome é ${this.nome}`;
	},
};
// console.log(pessoa.falarNome());

for (let id in pessoa) {
	console.log(id, pessoa[id]);
}
