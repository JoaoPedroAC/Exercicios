// querySelector só retorna um elemento ou seja o 1º que ele encontrar no nosso caso seria a 1ª classe "paragrafos" caso houvesse mais, ele atacaria somente a 1ª.
const paragraph = document.querySelector('.paragrafos');
const p = paragraph.querySelectorAll('p');
// esse getComputedStyle vai pegar todo o style que há no body e vai me dar o valor literal dos mesmos.
const estyleBody = getComputedStyle(document.body);
const backColor = estyleBody.backgroundColor;
console.log(backColor);

for (let ps of p) {
	ps.style.backgroundColor = backColor;
	ps.style.color= 'red';
}
