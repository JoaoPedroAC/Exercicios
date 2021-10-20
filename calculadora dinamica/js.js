window.onload = function() {
    // projeto calculadora dinamica

    // precisamos de um numero inicial 
    // o tipo de operação a ser feita
    // e o numero final
    // precisamos do resultado

    /*parseInt vai transformar o numero em inteiro, parese  transforma em alguma coisa*/

    var n1 = parseInt(prompt('escreva um numero aqui'));


    /*while (n1 != Number) {
        alert('Safadinho, escreva certo dessa vez!!')
        n1 = Number(prompt('escreva um numero aqui'));
    }*/

    var sinal = prompt('Escreva um sinal aqui');

    // precisamos parar os espertinhos

    while (sinal != '+' && sinal != '-' && sinal != '/' && sinal != '*' && sinal != '**') {
        alert('Safadinho, escreva certo dessa vez!!')
        sinal = prompt('Escreva um sinal aqui')
    };

    var n2 = parseInt(prompt('Escreva outro numero aqui'));

    /* while (n2 != Number) {
         alert('Safadinho, escreva certo dessa vez!!')
         n2 = parseInt(prompt('escreva um numero aqui'));
     }*/

    var result = 0;

    switch (sinal) {
        case '+':
            result = n1 + n2;
            alert('o resultado é ' + result);
            break;

        case '-':
            result = n1 - n2;
            alert('o resultado é ' + result);
            break;

        case '/':
            result = n1 / n2;
            alert('o resultado é ' + result);
            break;

        case '*':
            result = n1 * n2;
            alert('o resultado é ' + result);
            break;

        case '**':
            result = n1 ** n2;
            alert('o resultado é ' + result);
            break;

    }
}