const elementos = [
	{ tag: 'p', texto: 'Qualquer texto' },
	{ tag: 'div', texto: 'Frase 1' },
	{ tag: 'section', texto: 'Frase 2' },
	{ tag: 'footer', texto: 'Frase 3' },
];
elementos.push({tag:'footer', texto:'último texto'});

const mainBox = document.querySelector('#conatainer');
const title = document.getElementsByTagName('h1')[0];
const div = document.createElement('div');
div.classList.add('whiteBox');
mainBox.appendChild(div);
div.appendChild(title);

for (let i = 0; i < elementos.length; i++) {
	let {tag, texto} = elementos[i];
	let tagCriada = document.createElement(tag);
	div.appendChild(tagCriada);
    tagCriada.innerHTML = texto;
}