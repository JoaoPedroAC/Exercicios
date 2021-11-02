// para calcular o imc - peso / altura^2 ou (altura * altura)
const nome = document.getElementById('nome');
const heigth = document.getElementById('altura');
const weight = document.getElementById('peso');
const button = document.getElementById('botao');
const answer = document.getElementById('answer');

button.addEventListener('click', function stop() {
	if (nome.value === '') {
		answer.style = 'display:block; background-color: red;transition: 0.5s; -o-transition: 0.5s;';
		answer.innerHTML = 'Faltando <b>Nome</b>';
		return;
	} else if (Number(heigth.value) === 0) {
		answer.style = 'display:block; background-color: red; transition: 0.5s; -o-transition: 0.5s;';
		answer.innerHTML = 'Faltando <b>Altura</b>';
		return;
	} else if (Number(weight.value) === 0) {
		answer.style = 'display:block; background-color: red; transition: 0.5s; -o-transition: 0.5s;';
		answer.innerHTML = 'Faltando <b>Peso</b>';
		return;
	}else if (Number(heigth.value) <= 0.45) {
		answer.style = 'display:block; background-color: red; transition: 0.5s; -o-transition: 0.5s;';
		answer.innerHTML = 'Digite sua <b>Altura corretamente</b>';
		return;
	} else if (Number(weight.value) <= 2.49) {
		answer.style = 'display:block; background-color: red; transition: 0.5s; -o-transition: 0.5s;';
		answer.innerHTML = 'Digite seu <b>Peso corretamente</b>';
		return;
	}else{}
	function renderResult(paciente,peso,altura) {
		answer.style = 'display:block; background-color: green; transition: 0.8s; -o-transition: 0.8s;';
		let imc = parseFloat(parseFloat(peso).toFixed(2) / (parseFloat(altura).toFixed(2)**2)).toFixed(2);
		answer.innerHTML = `<b>${paciente}</b> seu <b>IMC</b> é de <b>${imc}</b>`;
	}
	renderResult(nome.value,weight.value,heigth.value);
});
