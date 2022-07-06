// para fazer o A j a x
const request = (obj) => {
	return new Promise((resolve, reject) => {
		// XMLHttpRequest = xhr
		const xhr = new XMLHttpRequest();
		// aqui vai dar evento de GET, para pegar algo do banco de dados
		xhr.open(obj.method, obj.url, true);
		// aqui seria o POST se fosse para mandar algo de um formulario; poder ser assim () ou assim (null), ja que nao enviaremos nada
		xhr.send();
		// vai servir para checar se está passando pelos codigos http corretos, os aceitos sao de 200 á 300 e poucos
		xhr.addEventListener('load', () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		});
	});
};
// aqui ele vai pegar os eventos de click em tudo, porem queremos apenas a ancora
document.addEventListener('click', (e) => {
	const element = e.target;
	const tag = element.tagName.toLowerCase();
	if (tag === 'a') {
		// vai previnir de ter que chamar novamente toda a regra dessa função
		e.preventDefault();
		carregaPagina(element);
	}
});

async function carregaPagina(element) {
	const href = element.getAttribute('href');
	const objConfig = {
		method: 'GET',
		url: href,
	};
	try {
		const response = await request(objConfig);
		carregeResultado(response);
	} catch (error) {
		console.log(error);
	}
}
function carregeResultado(response) {
	const resultado = document.querySelector('.resultado');
	resultado.innerHTML = response;
}
