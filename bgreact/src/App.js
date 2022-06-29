import './App.css';
import FirstComponent from './Components/FirstComponent';

function App() {
	return (
		<div className='App'>
			<h2>Hellow Reactonautas</h2>
			<FirstComponent/>
		</div>
	);
}

export default App;

/*APP é o arquivo principal, functions de default sao aquelas que irá retornar conteúdo para a página e só pode ter entre (conteudo de HTML) após o return 1 tag pai*/
/* serve apenas para functions - só se fecha uma tag <><> caso alguma coisa seja escrita no meio, caso nao haja necessidade pode apenas < /> - exemplo FirstComponent*/