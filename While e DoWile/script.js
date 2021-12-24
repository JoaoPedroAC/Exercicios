function random(min, max) {
	let r = Math.random() * (max - min) * min;
	return Math.round(r);
}
let min = 1;
let max = 20;
let rand = 10;
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
