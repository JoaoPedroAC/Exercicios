// Object.defineProperty(define 1) - Object.defineProperties(define +1 ou todos objetos)
function Produto(nome, preco, estoque, typeOfLevel = "operator") {
	// this.nome = nome; // variavel publico
	// Object.defineProperty(this, "estoque", {
	// 	enumerable: true /*mostra a chave*/,
	// 	value: estoque /*mostra o valor da chave*/,
	// 	writable: false /*nega alteração do valor da chave, utlizando métodos externos*/,
	// 	configurable: false /* não pode reconfigurar as propriedades da chave e nem apaga-la*/,
	// });
	if (typeOfLevel === "admin") {
		return Object.defineProperties(this, {
			nome: { enumerable: true, value: nome, writable: true },
			preco: { enumerable: true, value: preco, writable: true },
			estoque: { enumerable: true, value: estoque, writable: true },
		});
	} else if (typeOfLevel === "operator") {
		return Object.defineProperties(this, {
			nome: { enumerable: true, value: nome, writable: false },
			preco: { enumerable: true, value: preco, writable: true },
			estoque: { enumerable: true, value: estoque, writable: true },
		});
	} else {
		return Object.defineProperties(this, {
			nome: { enumerable: true, value: nome, writable: false },
			preco: { enumerable: true, value: preco, writable: false },
			estoque: { enumerable: true, value: estoque, writable: false },
		});
	}
}

const admin = new Produto("Carro vermelho", 2000, 3, "admin");
admin.nome = "Lamborguine veneno";

const operator = new Produto("Carro Azul", 300, 1);
operator.nome = "Moto verde";
operator.estoque = 1000;

const client = new Produto("Carro Verde", 50, 5, "client");
client.preco = 300000;

// console.log(Object.keys(admin)); //mostra as chaves dentro de um array
console.log(admin);
console.log(operator);
console.log(client);
