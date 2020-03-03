import React from 'react'; // importando react
import { render } from 'react-dom'; // importando a função render de dentro do react-dom, sempre que importarmos react tbm importar o react-dom 
import App from './App'; // importando App e na hora de utilizar no render devemos utilizar como se fosse uma tag de html ex: <App/>


// o render ele e responsavel por renderizar um codigo react/ componente dentro do html.
// no primeiro parametro podemos colocar conteudo html por causo do jsx, e no segundo parametro informamos onde deve ser inserido esse conteudo no html
alert("wellcome")
render(<App/>, document.getElementById('app'));