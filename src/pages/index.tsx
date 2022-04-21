import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Card from "../components/Card";
// markup
import "../style.css";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px 0px;
  background-color: #effafa;
`;
const CardContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 32px 0px;
  padding: 24px;
  align-items: center;

  @media (min-width: 769px) {
    gap: 16px 0px;
  }
`;
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        nodes {
          id
          company
          logo
          featured
          contract
          level
          role
          new
          position
          languages
          location
          tools
          postedAt
        }
      }
    }
  `);

  const [info, setInfo] = React.useState(data.allDataJson.nodes);

  return (
    <Main>
      <CardContainer>
        {info.map((elem, index) => (
          <Card {...elem} />
        ))}
      </CardContainer>
    </Main>
  );
};

export default IndexPage;
