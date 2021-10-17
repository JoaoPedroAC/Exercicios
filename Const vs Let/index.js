const nome = 'João Pero';
const sobreNome = 'de Almeida';

let date = new Date();
let idade = 22;
let anoNascimento = date.getFullYear() - idade;
let peso = parseFloat(70).toFixed(2);
let altura = parseFloat(1.75).toFixed(2);
let imc = parseFloat(peso / altura ** 2).toFixed(2);

console.log(
	`${nome} ${sobreNome} tem ${idade}, pesa ${peso} kg,\ntem ${altura} metros de altura e seu IMC é de ${imc},\n${nome} nasceu em ${anoNascimento}`
);
