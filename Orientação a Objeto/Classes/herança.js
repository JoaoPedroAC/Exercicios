// Vale anotar que não é bom para o código ter muita herança, antes de criar as classes é bom analisar bem o código para não ter heranças em excesso, o ideal é ter no máximo 3 heranças, mais que isso (que já é muito) pode virar uma teia de aranha, além de de fragilizar o código.

// Vale lembrar tambem que assim como na vida real, os filhos podem herdar dos pais, mas os pais nao podem herdar dos filhos!

class Dispositivo {
  constructor(marca) {
    this.marca = marca;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(`Dispositivo ${this.marca} está liagdo!!`);
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(`Dispositivo ${this.marca} está desligado!!`);
      return;
    }
    this.ligado = false;
  }
}
// extends para estender tudo o que for do pai para o filho
class Smartphone extends Dispositivo {
  constructor(marca, cor, modelo) {
    // super() é para que vc possa pegar as coisas de dentro do pai (Dispositivo) que já foram declarado, sem precisar declarar de novo e é obrigatório ter isso, se for passar mais algum parametro no constructor!
    super(marca);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends Smartphone {
  constructor(marca, cor, modelo, conectWifi) {
    super(marca, cor, modelo);
    this.conectWifi = conectWifi;
  }
  //   voce pode sobre escrever um método também
  // ligar() {
  //   console.log("Alterei o ligar do Avô já que o pai não tem");
  //   return;
  // }
}
const t1 = new Tablet("Ipad", "Vinho", "Pad 12", true);
console.log(t1);
t1.ligado = false;
t1.desligar();
