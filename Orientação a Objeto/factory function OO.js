function pessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get juncaoNome() {
			//  Se não houver esse get no console log, teria que executar a função
			return `${nome} ${sobrenome}`;
		},
	};
}
const p1 = pessoa('João', 'Berg');
console.log(p1.juncaoNome);
