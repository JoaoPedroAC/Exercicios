// temos o slider
const slider = document.getElementById('myRange');
// temos a tela
const display = document.getElementById('valor');
// chamei aqui para setar o primeiro valor
display.innerHTML = slider.value;
// ao interagir com o input e vali executar enquanto a interações rolar
slider.oninput = function () {
	display.innerHTML = this.value;
};
// aqui vai
slider.addEventListener('mousemove', function () {
	// poderia ser apenas slider.value, mas desse jeito fica mais completo, devido o range dar resultados em "porcentagem"
	let x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
	let color = `linear-gradient(90deg,
		rgb(117, 252, 117) ${x}%,
		rgb(214, 214, 214) ${x}%)`;
	slider.style.background = color;
});
