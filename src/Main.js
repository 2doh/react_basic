import React from "react";
import styled from "@emotion/styled";

const StyledTitle = styled.div`
  background-color: pink;
  font-size: 48px;
  font-weight: bold;
`;

const Main = () => {
  const title = "리액트1";
  return <StyledTitle>{title}</StyledTitle>;
};

export default Main;
