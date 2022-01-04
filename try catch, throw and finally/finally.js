function retornaHoraAtual(data) {
// se valor NÃO for instacia de Date retornará false, dai pulará o if
	if (data && !(data instanceof Date)) {
        // console.log(data && !(data instanceof Date));
		throw 'não é instacia de Date';
	}
// se ganhar valor o if retornara false, dai pulará o if
	if (!data) {
        // console.log(!data);
		data = new Date();
	}

	return data.toLocaleString('pt-BR', {
		// day: '2-digit',
		// month: '2-digit',
		// year: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});
}
try {
	const data = new Date('01-01-1970 12:00:59');
	const hora = retornaHoraAtual(11);
	console.log(hora);
} catch (e) {
	console.log(e);
} finally {
	console.log('tenha um bom dia');
}
