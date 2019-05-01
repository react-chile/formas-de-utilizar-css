import React, {Component} from 'react';
import './TextoCss.css';

export default class TextoCss extends Component{

    render(){
        const {texto} = this.props;
        return (
          <span className='textoStyle'>{ texto } </span>
          
          )}
  
  };
