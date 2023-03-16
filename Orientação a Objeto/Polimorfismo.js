// Superclasse
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    this.verSaldo();
    console.log(`Saldo insuficiente R$ ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(`Ag/c.: ${this.agencia}/${this.conta} | Saldo R$ ${this.saldo.toFixed(2)}`);
};

// Conta corrente
function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;
CC.prototype.sacar = function (valor) {
  if (valor > this.limite + this.saldo) {
    this.verSaldo();
    console.log(`Saldo insuficiente R$ ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

// Conta poupança
function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const conta1 = new Conta("852", "0233", 200);
conta1.verSaldo()
conta1.depositar(200);
conta1.sacar(10);

console.log(" ");

const cc1 = new CC("555", "1001", 300, 100);
cc1.verSaldo()
cc1.depositar(0);
cc1.sacar(400);

console.log(" ");

const cp1 = new CP("061", "0221", 10);
cp1.verSaldo();
cp1.depositar(10);
cp1.sacar(20);
