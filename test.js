import React, { Component } from "react";
import styled, { css } from "styled-components/native";
import computeProps from './computeProps';

const StyledButton = styled.TouchableOpacity`
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
  ${ props => props.bordered && css `backgroundColor: transparent; borderWidth: 1; borderColor: blue` }
  ${ props => (props.bordered && props.danger) && css `backgroundColor: transparent; borderWidth: 1; borderColor: red` }
  ${ props => console.log(props, "ch") }
`;

class Button extends Component {

  renderChildren() {
    var defaultProps = {
            button: true,
            danger: this.props.danger
    }
    let newProps = computeProps(this.props.children.props, defaultProps);
    let children = React.cloneElement(this.props.children, newProps);
    return children;
  }
  render() {
    return (
      <StyledButton {...this.props}>
        {this.renderChildren()}
      </StyledButton>
    )
  }
}

export default Button;
