const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const enviar = document.getElementById('enviar');
const area = document.getElementById('area-texto');

// let nm; -> certo
// let n = nome.value; -> retorna undefined ou zero ou ate mesmo nada
let pessoas = [];
let contador = 0;
function cadastrar() {
	// contador++;

	// nm = nome.value; -> certo
	// n = nome.value; -> retorna undefined ou zero ou ate mesmo nada
	pessoas.push({
		nome: nome.value, //nm
		sobrenome: sobrenome.value,
		peso: parseFloat(peso.value).toFixed(1),
		altura: parseFloat(altura.value).toFixed(2),
	});
	// no meu caso eu precisei por o contador, pois sem ele eu o html ficaria so com object, eu poderia ao inves disso por apenas o que eu quero .value, que daria no mesmo.
	area.innerHTML += (`${pessoas[contador].nome} ${pessoas[contador].sobrenome} ${pessoas[contador].peso}
    ${pessoas[contador].altura} <br>`);
    contador++;
	console.log(pessoas);
};
