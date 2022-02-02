// vamos estudar atribuição e desestruturação com objetos
const pessoas = {
	nome: 'João',
	sobrenome: 'Pedro',
	idade: 30,
	endereco: {
		rua: 'Rua Santa Leopold',
		numero: 2000,
	},
};
// atribuição e desestruturação
// É necessario usar o nome literal do da variavel do objeto se não dá erro
const { nome, sobrenome, ...restante} = pessoas;
console.log(nome, sobrenome, restante);


// fazendo referencia a um objeto especifico dentro de outro objeto

const {
	// para fazer esse r atribuir esta string, tem que comentar a atribuição original
	endereco: { rua: r = 'Rua Santo Leo', numero },
} = pessoas;
console.log(r, numero);
