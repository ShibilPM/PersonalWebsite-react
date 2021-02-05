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
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5rem;
  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-weight: normal;
    font-size: 2.5rem;
  }

  .image {
    height: 400px;
  }

  @media (max-width: 720px) {
    padding-top: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.8rem;
    }
  }
`;
