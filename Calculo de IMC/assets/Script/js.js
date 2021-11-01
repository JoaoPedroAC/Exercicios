const nome = document.getElementById('nome');
const heigth = document.getElementById('altura');
const weight = document.getElementById('peso');
const button = document.getElementById('botao');
const answer = document.getElementById('answer');

button.addEventListener('click', function stop() {
	nome.value;
	heigth.value;
	weight.value;
	if (nome.value === '' || heigth.value === 0 || weight.value === 0) {
		console.log('deu erro!!');
		return;
	} else {}

    function render(){
        console.log('funcionando')
    }
    render();
});
