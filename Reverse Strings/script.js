// Invertendo Strings com function
function reversing(str) {
	let space = ''; //é uma string q irá se repetir sempre e sem ela a function retorna o index 0 = 'w';
	for (let i = str.length - 1; i >= 0; i--) {
		// vemos que esse -1 deleta oq será incrementado que é o '';
		space += str[i]; // aqui ele vai pegar cada index da string e vai mostra-la de forma invertida;
	}
	return console.log(space); // tem que ser o space, pois ele que está se repitindo e gerando os indexs da string.
}
reversing('world');

// Invertendo Strings com function e métodos *não precisa necessáriamente de fuction
function reversingToo(str) {
	const words = str;
	let wordChaged = words.split('').reverse().join('');
	return console.log(wordChaged);
}
reversingToo('word');