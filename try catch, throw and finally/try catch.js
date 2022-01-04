/* Aqui dará um erro */
// console.log(naoExisto);
/* Aqui está tentando executar algo que sabemos que dará erro */
try {
	console.log(naoExisto);
	/* Para trata-lo usamos esse 'catch' onde seu parametro 'err' ou o que vc quiser chamar(mas por padrão ou é 'e' ou 'err') é o próprio erro que daria normalmente; dentro dele vc coloca o tratamento(vale dizer que NÃO mostre ao usuário o erro e nem nada sobre o mesmo, ja que o cliente muitas vezes não será um técnico e é boa pratica por algo simples e direto!)  */
} catch (err) {
	console.log('insira os dados corretamente');
}

/* Exemplo */

const somar = (x, y) => {
	if (typeof x !== 'number' || typeof y !== 'number') {
		// throw ReferenceError('x e/ou y não foram inseridos corretamente');
		throw 'x e/ou y não foram inseridos corretamente';
	}
	return x + y;
};
try {
	console.log(somar(2, 3));
	console.log(somar(3));
} catch (error) {
	console.log(error);
}
