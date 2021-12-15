import './App.css';

import React from "react";
// import ReactDOM from 'react-dom';

import Primeiro from './Components/Primeiro';
import ComParametros from './Components/ComParametros';
import ComFilhos from './Components/ComFilhos';
import Card from './Components/layouts/Card';
import Repeticao from './Components/Repeticao';
import Condicional from './Components/Condicional';
import CondicionalComIf from './Components/CondicionalComIf';

export default prpos =>
    <div className='main'>
        <Card titulo='#01 Primeiro Componente'>
            <Primeiro/>
        </Card>
        {/* Primeiro Componente */}

        <Card titulo='#02 Componente Com Parametro'>
            <ComParametros
            titulo='meu titulo'
            subtitulo='meu subtitulo'/>
        </Card>
        {/* Componente Com Parametro */}

        <Card titulo='#03 Componentes Com Filhos'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bruno</li>
                    <li>Marcelo</li>
                </ul>
            </ComFilhos> 
        </Card>
        {/* Componentes Com Filhos */}

        <Card titulo='#04 Orçamento'>
            <Repeticao/>
        </Card>
        {/* Orçamento */}

        <Card titulo='#05 Par ou Impar V1'>
            <Condicional numero={8}/>
        </Card>
        {/* Par ou Impar */}

        <Card titulo='#06 Par ou Impar V2'>
            <CondicionalComIf numero={9}/>
        </Card>
        {/* Par ou Impar */}
    </div>