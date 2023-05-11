import React from "react";
import styled from "styled-components";

const DefaultButton = styled.button`
  background: ${(props) => {
    if (props.primary) return props.theme.colors.appNavLinkBgHover;
    return props.theme.colors.appTopbarBg;
  }};

  color: ${(props) => {
    if (props.primary) return props.theme.colors.red;
    return props.theme.colors.bodyColor;
  }};

  display: inline-flex;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  border-radius: ${(props) => props.theme.radii.button};

  &:active,
  &:visited {
    color: ${(props) => props.theme.colors.appNavLinkColor};
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.appNavLinkColorHover};
    text-decoration: none;
  }
`;

const Button = ({ text, ...props }) => {
  return <DefaultButton {...props} as={props.as} />;
};

export default Button;
