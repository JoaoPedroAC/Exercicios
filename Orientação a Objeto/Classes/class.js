// O bom de Class é que diferente da function construtor, vc não precisa atrelar funções no prototype, pois o JS faz isso sozinho
class Pessoa {
  // quais quer paramentros da classe é bom utilizar nesse construtor abaixo, já funções é bom usar fora
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  falar() {
    return console.log(`${this.nome} esté falando muito!`);
  }
}

const pessoa = new Pessoa("João", "Pedro", 23);
// console.log(pessoa.nome);
// pessoa.falar();