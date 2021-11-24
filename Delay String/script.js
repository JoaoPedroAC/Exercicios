// todo o sistema de delay
/*function printSentence(id, sentence) {
    // vamos definir o loop
	for (let i = 0; i < sentence.length; i++) {
        // function onde é responsavel por definir printar no html com delay
		(function (index) {
			setTimeout(function () {
				document.getElementById(id).innerHTML += sentence[index];
                // time do delay
			}, 100 * i);
            // sem i ele nao vai printar nada, pq ele é o index da função
		})(i);
	}
}
printSentence('result', 'Hello, CodeToInvent!');*/

/*Reforçanddo */

function printString(id, frase) {
	for (let i = 0; i < frase.length; i++) {

		setTimeout(function delayString(index) {
            index = i;
			document.getElementById(id).innerHTML += frase[index];
		}, 300 * i);
		
	}
}
printString('result', 'Faaaaalaaaaaa');
