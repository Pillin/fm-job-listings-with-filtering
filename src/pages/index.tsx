import React from "react";

import styled from "@emotion/styled";

import CardList from "../components/CardList";
import Header from "../components/Header";

import "../style.css";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px 0px;
  background-color: #effafa;
`;

const IndexPage = () => {
  return (
    <Main>
      <Header />
      <CardList />
    </Main>
  );
};

export default IndexPage;
