import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  background: transparent;
  color: #0076c0;
  display: inline-flex;
  padding: 0;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${(props) => props.theme.fonts.body};

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

const TextButton = ({ text, ...props }) => {
  return <Button as={props.as}>{text}</Button>;
};

export default TextButton;
