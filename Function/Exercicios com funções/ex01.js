// Faça uma função que recebe 2 números e retorna o maior deles!

function numeroMaior(x, y) {
	const oMaior = Math.max(x, y);
	const oMenor = Math.min(x, y);
	return console.log(`O maior é ${oMaior} \nO menor é ${oMenor} \n`);
}
numeroMaior(aleatorio(2, 10), aleatorio(2, 10));

function aleatorio(min, max) {
	min = Math.ceil(min);
	max = Math.ceil(max);
	randoming = Math.random() * (max - min) + min;
	return Math.round(randoming);
}
// ou
const maximum = (n1, n2) => (n1 > n2 ? n1 : n2);
console.log(maximum(100, 20));
