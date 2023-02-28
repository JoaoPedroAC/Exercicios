/* // SOBRE O PROTOTYPE // CUIDADO AO MEXER NO PROTOTYPE, POIS O MESMO PODE ACABAR PESANDO SUA APLICAÇÃO
 JS  é baseado em prototipos para passar propriedades e metodos de um obj  para outro;

 Definição de prototipo:
    É o termo usado para se referir ao que foi criado pela 1ª vez, servindo de modelo ou molde para futuras produções.

 Todos os obj tem referencia interna para um prtotipo (_proto_ ou [[Prototype]]) que vem da propriedade prototype da função construtora que foi usada para cria-lo.
 Quando tentamos acessar um membro de um obj, 1º o motor do JS vai tentar encontrar este membro no proprio obj e depois a cadeia de prototipos é usada ate o topo (null) ate encontrar (ou nao) tal membro.
*/

// Construtora -> molde(classe)
/*
function Peaple(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}
Peaple.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// instancia
const person1 = new Peaple("João", "Pedro");
const date = new Date();
console.log(person1);
console.log(date);
*/
/* // MANIPULANDO O PROTOTYPE
// new obj -> obj.prototype
const objA = {
  keyA: "A",
  // __PROTO__: Object.prototype é algo que é criado assim que criamos um objeto
};
const objB = {
  keyB: "B",
  //__PROTO__: objA
};
const objC = new Object();
objC.keyC = "C";
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC);
*/
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  Produto.prototype.discount = function (percentage = 0) {
    return (this.preco = this.preco - this.preco * (percentage / 100));
  };
  Produto.prototype.addition = function (percentage = 0) {
    return (this.preco = this.preco + this.preco * (percentage / 100));
  };

  // Object.freeze(this);
}

const p1 = new Produto("Camiseta", 50);
p1.discount(10);
console.log(p1);

// Literal
const p2 = {
  nome: "Casaco",
  preco: 10, // essa chave tem que ter o mesmo nome da chave de Produto.preco para que possa ser reutilizado o prototype dele!
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.addition(100);
// console.log(p2);

// Ao meu ver , o lado ruim de usar desta forma é que não está atualizando na hora, somente salvando em uma memoria temporária e é a mesma coisa em caso do objeto estar congelado!
const p3 = Object.create(Produto.prototype, {
  nome: { Writable: true, configurable: false, enumerable: true, value: "Blusa Chadrez" },
  preco: { Writable: true, configurable: false, enumerable: true, value: 80 },
});
const valor = p3.discount(50);
// console.log(valor);
