// aqui dentro ficara a componentização de react da nossa aplicação
import React from 'react';// sempre que formos utilizar a sintaxe jsx precisamos que o react esteja sendo importado.
import './App.css';
import TechList from './components/TechList';

function App(){
  // estamos criando o primeiro componente e retornando o valor desejado
  return <TechList/>
}

export default App;