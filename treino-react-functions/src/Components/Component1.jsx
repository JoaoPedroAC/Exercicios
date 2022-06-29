import React from 'react';
import Component2 from './Component2';
// import App from '../App';

export default function someThings() {
	const apresentacao = 'carai';
	const pessoa = { nome: 'João', sobrenome: 'Costela', idade: 22 };
	const some = () => {
		return pessoa.sobrenome;
	};
	return <Component2 value={some()} />;
}
