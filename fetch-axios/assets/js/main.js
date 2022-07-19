/*
// CODIGO DO PROFESSOR
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
*/

/*
// MEU CODIGO
async function apiDeCadastro() {
	const response = await fetch('pessoas.json');
	const array = await response.json();
	tabela(array);
}
apiDeCadastro();

function tabela(array) {
	const divResultado = document.querySelector('.resultado');
	const table = document.createElement('table');
	divResultado.appendChild(table);
	// titulos
	let th1 = document.createElement('th');
	let th2 = document.createElement('th');
	let th3 = document.createElement('th');
	let tr = document.createElement('tr');
	table.appendChild(tr);
	// definindo as titulo filhos
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	// conteudo das celulas
	th1.innerHTML = 'NOME';
	th2.innerHTML = 'IDADE';
	th3.innerHTML = 'SALARIO';
	// o loop é para pegar todo o conteudo do json da "api"
	for (constent of array) {
		// linha da tabela
		tr = document.createElement('tr');
		// celulas da tabela
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		table.appendChild(tr);
		// definindo as celulas em cada linha
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		// conteudo das celulas
		td1.innerHTML = constent.nome;
		td2.innerHTML = constent.idade;
		td3.innerHTML = constent.salario;
	}
}
*/

// AXIOS
axios('pessoas.json')
	.then((resposta) => tabela(resposta.data))
	.catch((e) => console.warn('Deu ruim!'));

function tabela(array) {
	const divResultado = document.querySelector('.resultado');
	const table = document.createElement('table');
	divResultado.appendChild(table);
	// titulos
	let thNome = document.createElement('th');
	let thIdade = document.createElement('th');
	let thSalario = document.createElement('th');
	let tr = document.createElement('tr');
	table.appendChild(tr);
	// definindo as titulo filhos
	tr.appendChild(thNome);
	tr.appendChild(thIdade);
	tr.appendChild(thSalario);
	// conteudo das celulas
	thNome.innerHTML = 'NOME';
	thIdade.innerHTML = 'IDADE';
	thSalario.innerHTML = 'SALARIO';
	// o loop é para pegar todo o conteudo do json da "api"
	for (constent of array) {
		// linha da tabela
		tr = document.createElement('tr');
		// celulas da tabela
		let tdNome = document.createElement('td');
		let tdIdade = document.createElement('td');
		let tdSalario = document.createElement('td');
		table.appendChild(tr);
		// definindo as celulas em cada linha
		tr.appendChild(tdNome);
		tr.appendChild(tdIdade);
		tr.appendChild(tdSalario);
		// conteudo das celulas
		tdNome.innerHTML = constent.nome;
		tdIdade.innerHTML = constent.idade;
		tdSalario.innerHTML = constent.salario;
	}
}
