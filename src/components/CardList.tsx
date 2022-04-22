import React, { useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Card from "../components/Card";

import Search from "../components/Search";

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

const CardList = () => {
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
  const [filtered, setFiltered] = React.useState(["frontend"]);

  const addFiltered = (value: string) => {
    let newElem = [...filtered];
    if (filtered.indexOf(value) < 0) {
      newElem.push(value);
    }
    setFiltered(newElem);
  };

  const removeFiltered = (value: string) => {
    let newArr = [...filtered];
    if (!value) {
      newArr = [];
    }
    const num = newArr.indexOf(value);
    newArr.splice(num, 1);

    setFiltered(newArr);
  };

  useEffect(() => {}, [filtered]);

  return (
    <CardContainer>
      <Search setSelection={removeFiltered} list={filtered} />
      {info.map((elem, index) => (
        <Card {...elem} addFiltered={addFiltered} key={`card-${index}`} />
      ))}
    </CardContainer>
  );
};

export default CardList;
