// For classico = Geralmente funciona com interaveis (arrays ou string);
// For in = Retorna o indice ou a chave (strings, arrays ou objetos);
// For of = Retorna o valor em si (interaveis, arrays ou strings)

const nome = 'João Pedro'
// revisando o anterior

for(let index in nome){
  console.log(nome);
}

console.log('/n');

//  quando usamos o for of ele retorna o valor interavel e nao o indice diferente do for in que retorna o indice, caso use objetos dá erro.
for(let valor of nome){
  console.log(valor);
}
