import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Img from "./Image";
import { H1, H2, H3, H4, H5 } from "./core/Typography";
import useMediaQuery from "../hooks/useMediaQuery";

interface CardI {
  company: string;
  logo: string;
  featured: boolean;
  contract: string;
  level: string;
  role: string;
  new: boolean;
  position: string;
  languages: string[];
  location: string;
  tools: string[];
  postedAt: string;
}

const Container = styled(motion.section)<{ isFeatured: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 24px;
  gap: 24px 0px;
  max-width: 1110px;
  width: 100%;

  align-items: flex-start;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  &::after {
    content: ${({ isFeatured }) => (isFeatured ? " " : "")};
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    height: 152px;
    gap: 0px 24px;
  }
`;

const Column = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px 8px;
`;

const Row = styled(motion.section)<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => gap || "0px 8px"};
`;

const CircleTag = styled(motion.section)`
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.0846154px;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 12px;
  padding: 4px 8px;
  display: flex;
  width: fit-content;
`;

const Featured = styled(CircleTag)`
  background: #2b3939;
  &::after {
    content: "Featured";
  }
`;
const New = styled(CircleTag)`
  background: #5ca5a5;
  border-radius: 12px;
  &::after {
    content: "New!";
  }
`;

const Tag = styled(motion.section)`
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.1px;
  position: relative;
  color: #5ca5a5;
  border-radius: 4px;

  &:after {
    background: #5ca5a5;
    mix-blend-mode: normal;
    position: absolute;
    opacity: 0.1;
    content: " ";
    left: -8px;
    padding: 0px 8px;
    width: 100%;
    height: 100%;
  }
  > span {
    color: #5ca5a5;
    opacity: 1;
  }
`;

const Card = (props: CardI) => {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <Container isFeatured={props.featured}>
      <Row gap={isDesktop ? "0px 24px" : "0px"}>
        <Img
          desktop={props.logo}
          mobile={props.logo}
          style={
            isDesktop
              ? {}
              : {
                  position: "absolute",
                  width: "40px",
                  top: "-20px"
                }
          }
        />
        <Column>
          <Row>
            <H2>{props.company}</H2>
            {props.new && <New />}
            {props.featured && <Featured />}
          </Row>
          <H1>{props.position}</H1>
          <Row>
            <H3>{props.postedAt}</H3>
            <H4>{props.contract}</H4>
            <H5>{props.location}</H5>
          </Row>
        </Column>
      </Row>
      <Column>
        <Row gap={"0px 24px"}>
          <Tag>{props.role}</Tag>
          <Tag>{props.level}</Tag>
          {props.languages.map((elem, index) => (
            <Tag>{elem}</Tag>
          ))}
        </Row>
      </Column>
    </Container>
  );
};

export default Card;
