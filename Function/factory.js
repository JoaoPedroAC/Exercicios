/* function factory são formas de acessar functions a partir de outras functions criando métodos */

function createPerson(nome, sobrenome, wei, alt) {
	return {
		nome,
		sobrenome,
		// getter - vai fazer o sistema ler como string
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}\n`;
		},
		// setter - vai permitir setar alguma coisa como uma variavel normal
		set nomeCompleto(valor) {
			// split vai dividir as string que possui espaço e trnasforma-las em array
			valor = valor.split(' ');
			// shift arranca do array o primeiro index ao contrario de pop
			this.nome = valor.shift();
			// join vai unir o array das strings e o espaço é pq se não, não havera espaço algum
			this.sobrenome = valor.join(' ');
			console.log(valor);
		},
		// Isso é o que chamamos de método
		fala(text = 'NADA') {
			// o this se refere a quem está chamando-o
			return `${this.nome} está falando ${text}`;
		},
		peso: wei,
		altura: alt,
		imc() {
			const indice = this.peso / this.altura ** 2;
			return `${this.nome} tem de imc ${indice.toFixed(2)}\n`;
		},
	};
}
const p1 = createPerson('João', 'Pedro', 80, 1.8);
// aqui em baixo temos a expresion q esta sendo apontado pelo this
p1.nomeCompleto = 'João Pedro Walker';
console.log(p1.nomeCompleto);

console.log('#1', p1.nome);
console.log('#2', p1.sobrenome);
console.log(p1.fala());

console.log(p1.imc());

const p2 = createPerson('Maria', 'Carla', 60, 1.5);
console.log(p2.fala('Oi'));
console.log(p2.imc());
