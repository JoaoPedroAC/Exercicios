const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a proxima interação;
// Break para e sai de qualquer laço;

for (let numero of numeros) {
	if (numero === 2) {
		console.log('pulei o 2');
		continue;
	}

	if (numero === 7) {
        console.log(`sai no ${numero}`);
		break;
	}
    console.log(numero);
}
