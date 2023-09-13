// há muitas formas de poder bloquear a alteração dos valores de dentro da classe, podemos usar Symbol, Getter e Setter também;
const _velocidade = Symbol("velocidade");
class Carro {
  constructor(marca) {
    this.marca = marca;
    // alterações que devem ser feitas após usar Symbol
    this[_velocidade] = 0;
  }
  // Sempre que tentarem acessar para ver os dados, passará pelo getter
  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }
  // Set pega o valor de Get, por isso que vc tem parametro obrigatorio nele, pque é a única forma de vc tratar os dados dentro de get
  set velocidade(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    console.log("SETTER");
    return (this[_velocidade] = value);
  }
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  freiar() {
    if (this[_velocidade] >= 0) return;
    this[_velocidade]--;
  }
}
// vai acelerar ou frear
const carrin = new Carro("Uno");
for (let i = 0; i <= 200; i++) {
  carrin.acelerar();
}
// qualquer alteração passará pelo setter
carrin.velocidade = 55;
console.log(carrin);
