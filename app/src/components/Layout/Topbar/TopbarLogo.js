import React from "react";
import { ReactComponent as Logo } from "../../../assets/logos/logo-rei-white.svg";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  width: 5rem;
  height: 2.5rem;
  min-width: 5rem;
  > svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const TopbarLogo = (props) => {
  return (
    <Wrapper>
      <Logo title="REI Systems" />
    </Wrapper>
  );
};

export default TopbarLogo;
