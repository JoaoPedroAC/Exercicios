/* COMO PROGRAMADOR TEMOS QUE PENSAR EM MUITAS POSSIBILIDADES DO SISTEMA E TBM REAPROVEITAR CODIGOS PARA DXAR O PROGRAMA MAIS "CLEAN", POR EXEMPLO:
    E-commerce de loja que vende de tudo um pouco e que tambem vai precisar de um método de aumentar e diminuir preços:
    // Teremos o PRODUTO:
        // CAMISETA( têm muitas cores), CANECA( têm vários materiais)
*/
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") throw TypeError("Escreva apenas números");
      estoque = valor;
    },
  });
}
Produto.prototype.acrescimo = function (percentual) {
  this.preco += this.preco * (percentual / 100);
};
Produto.prototype.promocao = function (percentual) {
  this.preco -= this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

/* JS NÃO TEM HERANÇA NESCESSARIAMENTE DITO É MAIS COMO UMA DELEGAÇÃO, PORÉM EM QUALQUER LUGAR VOCÊ VÊ ESSE TERMO "HERANÇA"*/

// VAMOS CRIAR UMA FUNCTION PARA DAR ACESSO AOS TIPOS DE MATERIAIS E COISAS AFINS
function Camiseta(nome, preco, estoque, cor) {
  // AQUI ESTAMOS USANDO O THIS PARA DIZER QUE O NOME E PREÇO PERTENCE AO PRODUTO AO MESMO TEMPO QUE PERTENCE A CAMISETA
  // VAMOS USAR UM MÉTODO QUE SERVE COMO "NEW", PORÉM ESSE MÉTODO NÃO FAZ HERDAR O PROOTOTYPE...
  // E TBM ELE DECLARA QUE CONSTRUTOR CAMISETA É A MESMA COISA QUE CONSTRUTOR PRODUTO, O QUE PODE A CARRETAR ALGUM PROBLEMA...
  Produto.call(this, nome, preco, estoque);
  this.cor = cor;
}
// POR ESSE MOTIVO TEMOS QUE VINCULAR MANUALMENTE, DESSE JEITO ELE FARÁ UMA CÓPIA DO PROTOTYPE DE PRODUTO
Camiseta.prototype = Object.create(Produto.prototype);
// E POR ESSE OUTRO MOTIVO QUE TEMOS QUE CORRIGIR ATRAVES DESTA AÇÃO ABAIXO, ASSIM DIZENDO PARA O SISTEMA QUE O CONSTRUTOR CAMISETA NÃO É CONSTRUTOR PRODUTO
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, estoque, material) {
  Produto.call(this, nome, preco, estoque);
  this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta("Regata", 10.0, 3, "Branca");
const caneca = new Caneca("Artesanal", 20.0, 50, "Porcelana");
camiseta.aumento(10);
console.log(camiseta);
console.log("CAMISETA EM ESTOQUE: ", camiseta.estoque);

caneca.acrescimo(100);
console.log(caneca);
console.log("CANECA EM ESTOQUE: ", caneca.estoque);
