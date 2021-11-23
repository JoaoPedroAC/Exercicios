/* 
  iniciando o estudo de datas
  new Date() é um método construtor por isso do new e a função iniciando com letra maiuscula
  podemos fazer o seguinte, repare dentro do parametro()
  podemos por numeros separados por virgulas, o que representaria
  ano, mes, dia, hora, minuto, segundo, milissegundos
    const data = new Date(2021,11,18,17,27,25,999);
    console.log(data);
*/

/*podemos detro do parametro colocar como string '' tbm mas para isso é necessario usar .toString() na variavel para o resultado ser mais correto independente se for ou nao escrito em string a data.
  const data = new Date('2021-11-19 17:26:50.999');
  console.log(data.toString());
*/
// Date(0) é 01/01/1970 -> época Unix
/*const tresHoras = 60 * 60 * 3 * 1000; // seg * seg * 3 * milissegundos = 3 horas
const umDia = 60 * 60 * 24 * 1000; // seg * seg * 24 * milissegundos = 1 dia
const data = new Date(0 + tresHoras - umDia);
console.log(data.toString());
*/

/*
const data = new Date();
console.log('Dia', data.getDate()); // dia da semana(sengunda-feira,...)
console.log('Mês', data.getMonth()); // 0 á 11
console.log('Ano', data.getFullYear());
console.log('Horas', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegudos', data.getMilliseconds()); // 0 á 999
console.log('Dia da semana', data.getDay()); // 0 - domingo, 6 - sábado
console.log('Marco 0 até hoje em milissegundo', Date.now());
*/

/*criando uma function para formatar a data*/
/*function DataBrasil(data) {
	console.log(data);
}
DataBrasil(formatData());

// fiz isso aqui pelo motivo de que os numero não estavam pondo o zero a esquerda quando os numeros eram menores que 10
function zeroEsquerda(num){
  return num <=10 ?`0${num}` : num;
}

function formatData() {
  const d = new Date();
	const dia = zeroEsquerda(d.getDate());
	const mes = zeroEsquerda(d.getMonth());
	const ano = zeroEsquerda(d.getFullYear() + 1);
	const hora = zeroEsquerda(d.getHours());
	const min = zeroEsquerda(d.getMinutes());
	const seg = zeroEsquerda(d.getSeconds());
  
	return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
}*/

/*Crie uma forma de calcular quanto tempo falta para o niver de algem */
// 1 - preciso pegar a data de nascimento - ok
// 2 - preciso criar uma regra para nao calcular menos de 0 - ok
// 3 - vou criar uma função que pegue a data atual e subtrair a data de nascimento - ok
const date = new Date();
let born = {day: 27, month: 11, year: 1999};

function leftZero(number){
  return number <10 ?`0${number}` : number;
}
function lessZero(number){
  return number < 0 ? 0 : number;
}
function birthDayCalculator(day,month,year){
  const daySubtracted = leftZero(lessZero(day-date.getDate()));
  const monthSubtracted = leftZero(lessZero(month-1-date.getMonth()));
  const tearSubtracted = leftZero(lessZero(year-date.getFullYear()));
  return `Faltam ${daySubtracted}/${monthSubtracted}/${tearSubtracted}`;
}
function birthDay(date){
  console.log(date);
}
birthDay(birthDayCalculator(born['day'],born['month'],born['year']));