// poderia estar criando essa funcionalidade como classe mas como ela nao vai ter intereçao com o state
// utilizaremos como função

import React from 'react';
import PropTypes from 'prop-types'; // importanto prop-types para poder utilizar e monitorar as declaracoes dentro da aplicação.

function TechItem({ tech, onDelete }){
  //as propriedades que informamos no outro arquivo conseguem ser acessadas via propriedades, essas propriedades
  // aqui estamos criando a funcionalidade da <li> que estava no arquivo techlist
  return (
    //como esse return recebera varias linhas de codigo jsx usamos o parentese
    <li> 
    {tech}
    <button onClick={onDelete} type="button" ></button>

    </li>
    
  );
}
 // o default props serve para informar um valor default para as propriedades que nao forem informadas no componente.
TechItem.defaultProps = {
  tech: 'Oculto',
}

// estamos definindo os proptypes do componente TechItem,
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;