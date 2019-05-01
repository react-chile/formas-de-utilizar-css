import React, {Component} from 'react';
import styled from 'styled-components';

const TxtStyle = styled.span`
  color: salmon;
  fontSize: 20px;
`;
export default class TextoStyled extends Component{

    render(){
        const {texto} = this.props;
        return (
          <TxtStyle>{ texto } </TxtStyle>
          )}
  
  };
