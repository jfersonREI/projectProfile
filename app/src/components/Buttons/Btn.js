import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  background: ${(props) => props.theme.appTopbarBg};
  color: ${(props) => props.theme.bodyColor};
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

const Btn = ({ text, ...props }) => {
  return <Button as={props.as}>{text}</Button>;
};

export default Btn;
