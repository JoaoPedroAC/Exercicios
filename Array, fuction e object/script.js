const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const enviar = document.getElementById('enviar');
const area = document.getElementById('area-texto');

let pessoas = [];
let contador = 0;

function cadastrar(){
    pessoas.push({
        nome: nome.value, 
        sobrenome: sobrenome.value,
        peso: parseFloat(peso.value).toFixed(1),
        altura: parseFloat(altura.value).toFixed(2)
});
    area.innerHTML += `${pessoas[contador].nome} ${pessoas[contador].sobrenome} ${pessoas[contador].peso}
    ${pessoas[contador].altura} <br>`;
    console.log(pessoas);
};