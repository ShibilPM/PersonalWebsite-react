import React from "react";
import styled from "styled-components";
import Typical from "react-typical";
import { motion } from "framer-motion";

import { titleAnimation } from "../../animation/animation";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <MainHeading>
          <motion.div variants={titleAnimation}>Hello There, </motion.div>
          <motion.div variants={titleAnimation}>
            <h1>
              I'am <Name>Shibil</Name>
            </h1>
          </motion.div>
          <motion.div variants={titleAnimation}>
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={["Developer....", 1000, "Designer....", 1000]}
            />
            <button>Resume📃</button>
          </motion.div>
        </MainHeading>
      </div>
    );
  }
}

export default Heading;

const MainHeading = styled(motion.div)`
  color: white;
  @media (max-width: 757px) {
  }
`;

const Name = styled.span`
  font-size: 5rem;
  font-family: "Yusei Magic", sans-serif;
`;
