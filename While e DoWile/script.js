function random(min, max) {
	let r = Math.random() * (max - min) * min;
	return Math.round(r);
}
let min = 1;
let max = 20;
let rand = 10;

// vale resaltar que se usarmos continue ou break, precisamos usar o variavel++ ou variavel-- antes deles, pois se nao atualizarmos essa variavel de controle sempre retornará um loop infinito; por boa pratica essas variaveis de controle é bom por sempre no final do escopo tambem.

/*
O while checa a condição e executa o que estiver dentro e caso seja false ele sai do loop.

**CASO O SE REMOVERMOS A FUNÇÃO O MESMO JA NAO SERA EXECUTADO!

*/
while (rand !== 10) {
	rand = random(min, max);
	console.log(rand);
}
console.log('NÃO EXECUTOU O WHILE');

/*
Ele checa 1º a condição e depois executa o loop.

**CASO O SE REMOVERMOS A FUNÇÃO O MESMO SERA EXECUTADO PELO MENOS 1X JA QUE ELE LE A CONDIÇÃO ANTES DE FAZER O LOOP!

*/
do {
	rand = random(min, max);
	console.log(rand);
} while (rand !== 10);

console.log('\nExecutando outra atividade');
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (i < numeros.length) {
	let numero = numeros[i];
	if (numero === 2) {
		console.log('pulei o 2');
		i++;
		continue;
	}
	if (numero === 7) {
		console.log(`sai no ${numero}`);
		i++;
		break;
	}
	console.log(numero);
	i++;
}
