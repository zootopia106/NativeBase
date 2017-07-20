import React, { Component } from "react";
import styled, { css, ThemeProvider } from "styled-components/native";
import variables from './theme/Header';
import _ from 'lodash';

const StyledHeader = styled.View.attrs({
  theme: props => (_.size(props.theme) != 0) ? props.theme : variables
})`
  backgroundColor: #F8F8F8;
  paddingTop: 15;
  paddingHorizontal: 10;
  height: 75;
  flexDirection: row;
  justifyContent: center;
  top: 0;
  left: 0;
  right: 0;
  ${ props => console.log(props, "Header") }
`;

export { StyledHeader as Header };
