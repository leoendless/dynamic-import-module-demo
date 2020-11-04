import React from "react";
import styled from "styled-components";

function NotFound() {
  return <Wrapper>404</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export default NotFound;
