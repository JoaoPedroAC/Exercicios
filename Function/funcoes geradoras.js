// são funcções que podem gerar outras funções ou elementos
// precisa desse * para dizer que é geradora, caso contrario vai retornar "funtion(generator)" ou algo assim!
function* geradora1() {
	// qualquer código...
	yield 'valor 1';
	// qualquer código...
	yield 'valor 2';
	// qualquer código...
	yield 'valor 3';
}
// next vai literalmente chamar o proximo valor
const g1 = geradora1();
/*console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next());*/

function* geradora2() {
	let i = 0;
	while (true) {
		// yield vai retorna de forma que nao atrapalhe o desenpenho do codigo, fazendo-o executar 1x por vez
		yield i;
		i++;
	}
}
const g2 = geradora2();
/*console.log(g2.next().value);
console.log(g2.next().value);*/

function* geradora3() {
	yield 0;
	yield 1;
	yield 2;
}
function* geradora4() {
	yield* geradora3();
	yield 3;
	yield 4;
	yield 5;
}

const g4 = geradora4();
/*for (let valor of g4) {
	console.log(valor);
}*/

function* geradora5() {
	yield function () {
		console.log('Sou y1');
	};

    // caso haja um return aqui, nao sera executado o 2º yield

	yield function () {
		console.log('Sou y2');
	};

    // ...
}
const g5 = geradora5();
const funcFirst = g5.next().value;
const funcSecond = g5.next().value;
// como dentro das funções tem console.log temos que chamar as recem declaradas
funcFirst();
funcSecond();
