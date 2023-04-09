import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.colors.appMainBg};
    font-family: ${(props) => props.theme.fonts.body};
    height: auto;
    margin: 0;
  }
`;

function AppGlobalStyle(props) {
  return <GlobalStyle>{props.children}</GlobalStyle>;
}

export default AppGlobalStyle;
