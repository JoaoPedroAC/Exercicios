/*
Escreva uma função que receba um numero e retorne o seguinte:
// Número é divisível por 3 = Fizz;
// Número é divisível por 5 = Buzz;
// Número é divisível por 3 e 5 = FizzBuzz;
// Número NÃO é divisível por 3 e 5 = retorna o próprio número;
--- Checar se o número é realmente um número ---
--- Use a função de 0 a 100 ---
*/

const divisible = (numeric) => {
	const divisibleThree = numeric % 3 === 0 ? 'Fizz' : 'Não é divisivel por 3';
	const divisibleFive = numeric % 5 === 0 ? 'Buzz' : 'Não é divisivel por 5';
	const both = numeric % 3 === 0 && numeric % 5 === 0 ? 'FizzBuzz' : numeric;
	const checkin = typeof numeric;
	return `Tipo ${checkin}\n${divisibleThree}\n${divisibleFive}\n${both}`;
};
console.log(divisible(Math.round(Math.random() * 100)));
