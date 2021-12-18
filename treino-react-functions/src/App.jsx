import './App.css';
import React from 'react';
import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';

export default function App(props) {
  return (
    <div className="App">
      <Component1/>
    </div>
  );
}
/*
a única forma de vc usar funçoes e string constantes de outros lugares é chamando o componente que está realizando a função.
*/