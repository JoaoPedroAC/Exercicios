// get pega o valor e mostra, set apenas modifca
/*
function Produto(nome, preco, estoque, typeOfLevel = "operator") {
	this.nome = nome;
	this.preco = preco;
	Object.defineProperty(this, "estoque", {
		enumerable: true,
		configurable: true,
		get: function () {
			return estoque;
		},
		set: function (valor) {
			if (typeof valor !== "number") {
				throw new TypeError("Escreva apenas números");
			}
			estoque = valor;
		},
	});
}

const admin = new Produto("Carro vermelho", 2000, 3, "admin");
admin.estoque = 55;
console.log(admin.estoque);
*/

// Factory Function
function criaPessoa(nome, idade) {
	return {
		get nome() {
			return nome;
		},
		set nome(valor) {
			valor = valor.substr(0,1).toUpperCase().concat(valor.split(valor.charAt(0)).join(''))
			nome = valor;
		},
		idade,
	};
}
const p1 = criaPessoa("João", 23);
console.log(p1);
p1.nome = "Marcos qualquer coisa";
console.log(p1.nome);
