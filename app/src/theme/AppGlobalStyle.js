import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
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
