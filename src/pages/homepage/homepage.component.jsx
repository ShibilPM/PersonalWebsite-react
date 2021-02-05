import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Heading from "../../components/heading/heading.component";

import { ReactComponent as ManWithLap } from "../../assets/manwithlap.svg";
import { pageAnimation, photoAnimation } from "../../animation/animation";

class HomePage extends React.Component {
  render() {
    return (
      <Home
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Heading />
        <ManWithLap className="image" />
      </Home>
    );
  }
}

export default HomePage;

const Home = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 7px 14px;
  overflow: hidden;
  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-weight: normal;
    font-size: 2.5rem;
  }

  .image {
    height: 400px;
  }

  @media (max-width: 757px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
  }
`;
