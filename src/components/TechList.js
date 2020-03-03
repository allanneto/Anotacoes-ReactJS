import React, { Component } from 'react'; // importando react, e uma segunda importacao do componetn 

import TechItem from './TechItem'
// Podemos criar componentes como classes tambem
// Sempre que uma variavel do componente precisar ser manipualda nos iremos chamar essa variavel de estado;

// qunaod formos guardar informacoes e manipula-las dentro de um componente nos utilizamos classes e om isso podemos utilizar o state
class TechList extends Component {
  /**
   * Default Props e PropTypes nas classes podem ser definidas via static tambem Ex:
   * static defaultProps ={
   *  tech: '',
   * }
   */

  state = {
    // o state precisa ter obrigatoriamente esse nome, ele sera o estado do componente
    // no state serao arquivadas todas as informacoes que seram manipulados por esse componente
    newTech: '  ',
    techs: [
      // 'Node.js',
      // 'ReactJS',
      // 'React Native'
    ],
    // esse metodo de declaração nao ira funcionar sem adicionar um novo plugion do babel, consultar arquivo de texto.
  }; 
  

  // Executado assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');voumeu

    if(techs){
      this.setState({techs: JSON.parse(techs)});
    }
  };

  //Executado sempre que houver alteracoes nas props ou estado
  componentDidUpdate(_, prevState) {
    //this.props, this.state - apos o update caso seja necessariompodemos pegar os dados de props ou state antes de serem atualizados e comparar com os dados de agora. 
    if(prevState.techs !== this.state.techs){ 
    // estamos verificando se sempre que for dado submit no component ele altera algo no state techs, caso mude salva no localstorage do navegador
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  };


  // Executado quando o componente deixa de existir.
  componentWillUnmount(){

  };


  handleInputChange = e => { 
    // devemos utilizar arrow functions em componentes do react pois eles podem utilizar o this
    //Sempre que quisermos alterar algum campo do nosso state devemos utilizar a função setState pois o react tem o padrao de imutabilidade.
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => { // metodo que esta recebendo uma ação que ocorre no formulario html
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech], // aqui para adicionarmos um novo item ao nosso array de techs, temos de reciar ele e para isso utilizamos os "...this.state.techs" para copiar o array atual e depois iinformamos as novas techs que desejamos inserir 
      newTech: '' // aqui estamos atualizando o valor de newTech para vazio, isso ira apagar o valor que foi escrito no input
    });   }

  handleDelete = (tech) =>{
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  };

  
  // todo componente escrito no formato de classe precisa obrigatoriamente ter um metodo render e esse metodo ira retornar o HTML.
  render(){

    return ( 
      // caso o html tenha mais que 1 linha retornar ele com um parenteses e inserir as linhas.
     
      
     // toda vez que precisarmos fazer uma iteração com o state devemos declararar uma key unica para os dados que precisam ser informados
     // quando precisarmos criar mais de uma tag nas linhas abaixo devemos usar o metodo de container ou seja ou colocar uma div por volta deles ou entao apenas uma tag vazia "<>""</>"que seria o fragment no react

    // quando formos utilizar uma funcção dentro das sintaxes do react, devemos criar uma nova arrow function antes de executala ex: onClick={() => this.handleDelete(tech)}

     <form onSubmit={this.handleSubmit}>
        <ul>
           {
             this.state.techs.map(tech => 
              <TechItem key="tech" 
              tech={tech} 
              onDelete={() => 
                this.handleDelete(tech)}
                />
              )} 
           {/* sempre que fizermos um map e retornamos diretamento um componente  a "key" deve ficar na listagem, ou seja no arquivo onde ira receber  */}
           {/* para o nosso componente que nao esta nesse arquivo poder acessar as informacoes desse arquivo precisamos informar via propriedade na Tag, o conceito de propriedade e muito importante, ela é tudo que passamos pro componente dentro da tag   */}

        </ul>
         <input 
         type="text" 
         onChange={this.handleInputChange}
         value={this.state.newTech}
         />
        <button type="submit">Enviar</button>

      </form>
    
    );
  }
}

export default TechList;