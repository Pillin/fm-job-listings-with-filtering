import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import CloseIcon from "../images/icon-remove.svg";
import { readdirSync } from "fs";

const Container = styled(motion.section)`
  background: #ffffff;
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  max-width: 1110px;
  width: 100%;
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 16px 24px;
  align-items: center;
`;

const Row = styled(motion.section)<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => gap || "0px 8px"};
  flex-wrap: wrap;
  @media (min-width: 769px) {
  }
`;
const Tag = styled(motion.section)`
  --after-opacity: 0.1;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.1px;
  position: relative;
  color: #5ca5a5;
  z-index: 2;
  cursor: pointer;
  padding: 0px 4px 0px 0px;
  border-radius: 4px;

  &::after {
    cursor: pointer;
    background: #5ca5a5;
    mix-blend-mode: normal;
    position: absolute;
    z-index: -1;
    opacity: var(--after-opacity);
    content: " ";
    left: -8px;
    padding: 0px 8px;
    width: 100%;
    height: 100%;
  }
`;

const TagContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled(motion.button)`
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #7c8f8f;
  background-color: transparent;
  border: 0px;
`;

const CloseButton = styled.button`
  border: 0px;
  background-color: #5ca5a5;
  display: flex;
  padding: 4px;

  &:hover {
    background-color: black;
  }
`;

const Search = (props: { list: string[]; setSelection: Function }) => {
  return (
    <Container>
      <Row>
        {props.list.map((elem, index) => (
          <TagContainer key={`tag-${index}`}>
            <Tag>
              <span>{elem}</span>
            </Tag>
            <CloseButton onClick={() => props.setSelection(elem)}>
              <CloseIcon />
            </CloseButton>
          </TagContainer>
        ))}
      </Row>
      <Row>
        <Button onClick={() => props.setSelection("")}>Clear</Button>
      </Row>
    </Container>
  );
};

export default Search;
