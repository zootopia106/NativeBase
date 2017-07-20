import React, { Component } from "react";
import _ from 'lodash';
import styled, { css, withTheme, ThemeProvider } from "styled-components/native";
import variables from './theme/Text';

const StyledText = styled.Text.attrs({
	theme: props => (_.size(props.theme) != 0) ? props.theme : variables
})`
  fontSize: ${props => props.theme.DefaultFontSize};
  color: ${props => props.theme.textColor};
  fontFamily: ${props => props.theme.fontFamily};
  fontWeight: 600;
  ${ props => props.note && css `color: #a7a7a7; fontSize: ${props.theme.noteFontSize}` }
  ${ props => props.header && css `color: blue` }
  ${ props => props.button && css `color: green` }
  ${ props => props.danger && css `color: red` }
  ${ props => console.log(props, "ch") }
`;

export { StyledText as Text };
