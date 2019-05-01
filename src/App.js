import React from 'react';
import logo from './logo.svg';
import './App.css';

import TextoCss from './components/textoCss/TextoCss';
import TextoInline from './components/inlineStyle/TextoInline';
import TextoCssModules from './components/cssModules/TextoCssModules';
import TextoStyled from './components/styledComponents/TextoStyled';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <ul>
        <li><TextoCss texto='Utilizando Css'/></li>
        <li><TextoInline texto='Utilizando Inline Style'/></li>
        <li><TextoCssModules texto='Utilizando Css-modules'/></li>
        <li><TextoStyled texto='Utilizando Styled-components'/></li>
 
      </ul>   


      </header>
    </div>
  );
}




export default App;
