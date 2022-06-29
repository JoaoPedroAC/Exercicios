// contructor => por convenção precisa-se iniciar com letra maiuscula e precisamos usar obrigatoria mente usar (new)
//  new cria um objto vazio q eh prenchido com uma variavel
function Person(nome, sobrenome) {
	// privados
	// const Id = 1234;
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.metodo = function () {
		console.log(`${this.nome} ${this.sobrenome}: sou um método`);
	};
}

const p1 = new Person('João', 'Pedro');
const p2 = new Person('Karol', 'Cristina');
console.log(p1.nome);
console.log(p2.metodo());
