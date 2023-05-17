/* PARA EVITAR UMA HIERARQUIA DE OBJ QUE É FRÁGIL, TEMOS A OPÇÃO DE FAZER UM "MIXING", QUE NADA MAIS É QUE FAZER UMA COMPOSIÇÃO, JUNTANDO VÁRIOS OBJ EM 1  */
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};
const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};
// será o prototype
// Object.assign vai criar uma cópia, assim como usar -> const proto = {...falar,...comer,...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);

/* ESSE OBJ PRINCIPAL AQUI! */
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, { nome: { value: nome }, sobrenome: { value: sobrenome } });
}

const p1 = criaPessoa("João", "Pedro");
console.log(p1);
const p2 = criaPessoa("Karol", "Cristina");
console.log(p2);

/*
function pessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get juncaoNome() {
			//  Se não houver esse get no console log, teria que executar a função
			return `${nome} ${sobrenome}`;
		},
	};
}
const p1 = pessoa('João', 'Berg');
console.log(p1.juncaoNome);
*/
