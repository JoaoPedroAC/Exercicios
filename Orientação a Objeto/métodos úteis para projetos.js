/*
Object.value => retorna em array o valor que está dentro de uma chave
Object.entries => retorna em arrays as chaves e seus respectivos valores (é como se fosse Object.keys + Object.value)
Object.assign (des, any) => é como spread
Object.getOwnPropertyDescription (obj, 'chave') => ele mostra as descrições de uma propriedade
... (spread)

// Já vimos:
Object.keys (retorna as chvaes)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: "Caneca", preco: 2.8 };
// Object.defineProperty(produto, "nome", { writable: false });

// const outrosProdutos = produto; // fazendo dessa forma, estamos apenas puxando 'produto' com outro nome, o que for mudado em 'outros..' mudará 'produto';

// const outrosProdutos = { ...produto, material: "Argila" }; // dessa forma fizemos um spread espalhammos as coisas de 'produto' dentro de 'outros...' e agr o que mudarmos em 1 não será alterado no outro

// const outrosProdutos = Object.assign({}, produto, { material: "Argila" }); // funciona como spread

// Exemplo
// outrosProdutos.nome = "Caderno";
produto.nome = "Caneta";

// console.log(outrosProdutos);
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));

for (let [chaves, valores] of Object.entries(produto)) {
	console.log(chaves, "|", valores);
}
