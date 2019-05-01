


import React, {Component} from 'react';
import style from './TextoCssModules.module.css';

export default class TextoCssModules extends Component{

    render(){
        const {texto} = this.props;
        return (
          <span className={style.textoStyle}>{ texto } </span>
          
          )}
  
  };
