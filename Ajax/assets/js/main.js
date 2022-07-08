// para fazer o A j a x
/*
const request = (obj) => {
	return new Promise((resolve, reject) => {
		// XMLHttpRequest = xhr
		const xhr = new XMLHttpRequest();
		// aqui vai dar evento de GET, para pegar algo do banco de dados, true é para dizer se será ou não async
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
*/
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
// mande esperar(await) tudo o que tiver que ser Promise
async function carregaPagina(element) {
	const href = element.getAttribute('href');
	const response = await fetch(href);
	const html = await response.text();

	response.status !== 200 ? Promise.reject('Deu erro') : html;
	carregeResultado(html);
	/* 
	//faz parte do request function
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
	*/
	// teste com fetch
	// fetch(href)
	// 	.then((response) => {
	// 		return response.status >= 200 && response.status <= 300
	// 			? response.text()
	// 			: Promise.reject('Deu erro');
	// 	})
	// 	.then((html) => carregeResultado(html))
	// 	.catch((e) => console.warn(e));
}
function carregeResultado(response) {
	const resultado = document.querySelector('.resultado');
	resultado.innerHTML = response;
}

/* Explicação sobre o fetch API (GET) */
// fetch retorna como sendo Promise
// fetch('./pagina4.html')
// 	.then((answer) => {
// 		if (answer.status !== 200) throw new Error('ERROR 7070 NOSSO');
// 		return answer.text();
// 	})
// 	.then((html) => {
// 		console.log(html);
// 	})
// 	.catch((e) => console.warn(e));
