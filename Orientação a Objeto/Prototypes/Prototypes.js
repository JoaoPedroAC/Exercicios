/*
 JS  é baseado em prototipos para passar propriedades e metodos de um obj  para outro;

 Definição de prototipo:
    É o termo usado para se referir ao que foi criado pela 1ª vez, servindo de modelo ou molde para futuras produções.

 Todos os obj tem referencia interna para um prtotipo (_proto_ ou [[Prototype]]) que vem da propriedade prototype da função construtora que foi usada para cria-lo.
 Quando tentamos acessar um membro de um obj, 1º o motor do JS vai tentar encontrar este membro no proprio obj e depois a cadeia de prototipos é usada ate o topo (null) ate encontrar (ou nao) tal membro.
*/

// Construtora -> molde(classe)
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
