                    // 0       1       2
const cestaFrutas = ['Pêra', 'Maçã', 'Uva'];
// aqui ele está apenas lendo os indices e/ou objetos
// OBS: esse frutas pode ser o que vc quiser
for (let frutas in cestaFrutas) {
	console.log(frutas);
}

// 2º exemplo
const pessoa = { nome: 'João', sobrenome: 'Costela', idade: 22 };
/*
A diferença entre pessoa.nome e pessoa['nome'] é que o segundo vc consegue acessar dados de forma mais dinamicamente.

No caso da chave como por padrão é retonado string, então é como se eu estivesse escrevendo pessoa['nome'] mas ao invés de 'nome' uso a variável do for in que está sendo chave, já que a mesma está me retornando o index do objeto.

O index do objeto é diferente do array, já q o array é numérico e o objeto são os próprios objetos.
*/
for( let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// esse é o nosso contador
/*
for (let i = 0; i < cestaFrutas.length; i++){
    console.log(cestaFrutas[i]);
};
 */
