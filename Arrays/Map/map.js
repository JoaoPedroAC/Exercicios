/*
Map ->  cria um novo valor em array[] assim como o Filter, porém diferente do Filter que pode encurtar os valores do array orignal, o Map pega a quantidade total do array original.
*/

// Bobre os numeros
const numeros = [5, 50, 80, 1, 3, 2, 5, 8, 7, 11, 15, 22, 27];
const dobra = numeros.map((value, index, array) => value * 2);
// console.log(dobra);
/*
 Para cada elemento:
 Retorne apenas uma sting com o nome da pessoa;
 Remova apenas a chave 'nome' do objeto;
 Adicione uma chave 'id' para cada objeto.
*/
const pessoas = [
	{ nome: 'João', idade: 22 },
	{ nome: 'Maria', idade: 50 },
	{ nome: 'Fernando', idade: 13 },
	{ nome: 'Julia', idade: 80 },
	{ nome: 'Leticia', idade: 70 },
	{ nome: 'Karolyna', idade: 23 },
];
const nomesString = pessoas.map((object) => object.nome);
// console.log(nomesString.toString());
// expansão é quando vc envolve entre parenteses um escopo de uma arrow funtion que so tem uma linha de codigo e a mesma é um objeto
const onlyYearsOld = pessoas.map((obj) => ({ idade: obj.idade }));
// const onlyYearsOld = pessoas.map((obj) => {
// 	delete obj.nome;
// 	return obj;
// });
// console.log(onlyYearsOld);

/* CUIDADO - valores que trabalham por referencia, caso vc mudealguma coisa, vc irá alterar o original! */
// const addId = pessoas.map((obj, index) => {
// 	obj.id = index + 1;
// 	return obj;
// });

// utilizei o rest operator para copiar tudo dentro de pessoas[].
const addId = pessoas.map((obj, index) => ({ id: index, ...obj }));
// console.log(pessoas);
console.log(addId);
