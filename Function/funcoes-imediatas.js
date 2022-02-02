/* IIFE = Immediately Invoked Function Expression 
não nada mais e nada menos que isolar e chamar de imediato as funções */

// PODE SER ASSIM: aqui estamos isolando do escopo global
(function (...resto) {
	function criaNome(nome) {
		return nome;
	}

	function printNome() {
		console.log(criaNome(`João\n`));
	}
	printNome();
    console.log(resto,`\n`)
})(`bla bla bla`);

let nome = 'To no escopo global';

// OU PODE SER ASSIM
function escopoFechado() {
	const pessoa = [];

	function criaPessoa(nome, sobrenome) {
		return pessoa.push({ nome: nome, sobrenome: sobrenome });
	}

	function chamaPessoa() {
		criaPessoa('João', 'Pedro');
		criaPessoa('Carlos', 'Henrique');
		for (let index in pessoa) {
			const { nome, sobrenome } = pessoa[index];
			console.log(`seu nome é ${nome}\n e seu sobrenome é ${sobrenome}\n`);
		}
	}
	chamaPessoa();
}
escopoFechado();

let nome2 = 'To no escopo global tbm';
