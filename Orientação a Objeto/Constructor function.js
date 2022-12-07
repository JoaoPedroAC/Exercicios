function Pessoa(nome, sobrenome) {
	(this.nome = nome),
		(this.sobrenome = sobrenome),
		(this.juncaoNome = function () {
			//  Se não houver esse get no console log, teria que executar a função
			return `Seu nome completo é ${this.nome} ${this.sobrenome}`;
		});
	// Object.freeze(this); // esse metodo faz com que em ipotese alguma os valores sejam alterados por métodos externos
}
const p1 = new Pessoa('João', 'Berg');
p1.nome = 'Outro nome';
console.log(p1);
