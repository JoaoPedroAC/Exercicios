// para calcular o imc - peso / altura^2 ou (altura * altura)
const nome = document.getElementById('nome');
const heigth = document.getElementById('altura');
const weight = document.getElementById('peso');
const button = document.getElementById('botao');
const answer = document.getElementById('answer');
button.addEventListener('click', function stop() {
	answer.style = 'display:block; background-color: red;transition: 0.5s; -o-transition: 0.5s;';
	if (nome.value === '') {
		answer.innerHTML = 'Faltando <b>Nome</b>';
		return;
	} else if (Number(heigth.value) === 0) {
		answer.innerHTML = 'Faltando <b>Altura</b>';
		return;
	} else if (Number(weight.value) === 0) {
			answer.innerHTML = 'Faltando <b>Peso</b>';
		return;
	} else if (Number(heigth.value) <= 0.45) {
			answer.innerHTML = 'Digite sua <b>Altura corretamente</b>';
		return;
	} else if (Number(weight.value) <= 2.49) {
			answer.innerHTML = 'Digite seu <b>Peso corretamente</b>';
		return;
	} else {
	}
	function renderResult(paciente, peso, altura) {
		answer.style = 'display:block; background-color: green; transition: 0.8s; -o-transition: 0.8s;';
		
		let result = parseFloat(peso).toFixed(2) / parseFloat(altura).toFixed(2) ** 2;
		
		if (result <= 16.99) {
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Muito abaixo do peso</b>`;
		}else if(result === 17.00 || result <= 18.49){
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Abaixo do peso</b>`;
		}else if(result === 18.50 || result <= 24.99){
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Peso normal</b>`;
		}else if(result === 25.00 || result <= 29.99){
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Acima do peso</b>`;
		}else if(result === 30.00 || result <= 34.99){
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Obesidade Grau I</b>`;
		}else if(result === 35.00 || result <= 40.00){
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Obesidade Grau II</b>`;
		}else if(result > 40.01){
			answer.innerHTML = `Srª <b>${paciente.toUpperCase()}</b> <br> seu IMC é de: <b>${result.toFixed(2)}</b> kg/m2 <br> <b>Obesidade Grau III</b>`;
		}
	}
	renderResult(nome.value, weight.value, heigth.value);
});
