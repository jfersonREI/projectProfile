import React from "react";
import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.appMainBg};
    font-family: ${(props) => props.theme.fonts.body};
    height: auto;
  }
`;

function AdminGlobalStyle(props) {
  return <Style>{props.children}</Style>;
}

export default AdminGlobalStyle;
