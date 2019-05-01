

import React, {Component} from 'react';

  const colorBlock=()=>{
    let rgb = []
    for (var i = 0; i < 3; i++) {
      let r = Math.floor(Math.random() * 256)
      rgb.push(r)
    }
    return rgb
  }

  const style= {
    textoStyle:{
      color: `rgb(${colorBlock()})`,
      fontSize: '18px'
    }
  }

export default class TextoInline extends Component{
  
  
    render(){
        const {texto} = this.props;
        return (
          <span style={style.textoStyle}>{ texto } </span>
          
          )}
  
  };


