const nome = prompt('Escreva seu nome completo');
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28
// j o a o   p e d r o   d   e  a  l  m  e  i  d  a      c  a  r  n  e  i  r  o
document.body.innerHTML = `Seu nome é: ${nome} <br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br>`; // ou pode ser nome.charAt(1)
document.body.innerHTML += `Qual o primeiro índice da letra \"a" no seu nome? ${nome.indexOf('a')} <br>`;
document.body.innerHTML += `Qual o último índice da letra \"a" no seu nome? ${nome.lastIndexOf('a')} <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br>` ;