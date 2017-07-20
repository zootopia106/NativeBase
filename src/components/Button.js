import React, { Component } from "react";
import _ from 'lodash';
import styled, { css } from "styled-components/native";
import variables from './theme/Button';

const StyledButton = styled.TouchableOpacity.attrs({
  theme: props => (_.size(props.theme) != 0) ? props.theme : variables
})`
  backgroundColor: blue;
  paddingVertical: 8;
  paddingHorizontal: 15;
  borderRadius: 6;
  height: 45;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  ${ props => props.danger && css `backgroundColor: red` }
  ${ props => props.success && css `backgroundColor: green` }
  ${ props => props.header && css `backgroundColor: transparent` }
  ${ props => (props.bordered && props.danger) && css `backgroundColor: transparent; borderWidth: 1; borderColor: red` }
  ${ props => console.log(props, "Button") }
`;


export { StyledButton as Button };
