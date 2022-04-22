import React from "react";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Image from "../components/Image";

const Container = styled(motion.header)`
  background-color: #5ca5a5;
`;

const Header = () => {
  return (
    <Container>
      <Image
        mobile="/images/bg-header-mobile.svg"
        desktop="/images/bg-header-desktop.svg"
        style={{}}
      />
    </Container>
  );
};

export default Header;
