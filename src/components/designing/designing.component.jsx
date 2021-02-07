import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as DesImage } from "../../assets/design.svg";
import { useScroll } from "../scroll/scroll";
import {
  reveal,
  line70Animation,
  line60Animation,
  line40Animation,
} from "../../animation/animation";

const Designing = () => {
  const [element, controls] = useScroll();
  return (
    <DesignStyle
      variants={reveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <div className="container">
        <div className="desskills">
          {" "}
          <h2>Designing</h2>
          <ul>
            <li>
              <p>Illustrator</p>
              <motion.div variants={line70Animation} className="line70" />
            </li>
            <li>
              <p>Adobe Xd</p>
              <motion.div variants={line60Animation} className="line60" />
            </li>
            <li>
              <p>Figma</p>
              <motion.div variants={line40Animation} className="line40" />
            </li>
          </ul>
        </div>

        <div className="designimage">
          <DesImage className="desimage" />
        </div>
      </div>
    </DesignStyle>
  );
};

export default Designing;

const DesignStyle = styled(motion.div)`
  color: white;
  padding-top: 30px;
  width: 100%;

  h2 {
    text-align: center;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding-left: 10%;
  }

  .desskills {
    display: flex;
    flex-direction: column;
  }

  .desimage {
  }

  .line90 {
    width: 90%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line80 {
    width: 80%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line70 {
    width: 70%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line60 {
    width: 60%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line50 {
    width: 50%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line40 {
    width: 40%;
    height: 5px;
    background-color: #bdb8b8;
  }

  @media (max-width: 760px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      text-align: center;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .desskills {
      width: 100%;
    }

    .line90 {
      width: 90%;
      height: 5px;
      background-color: #bdb8b8;
    }

    .line80 {
      width: 80%;
      height: 5px;
      background-color: #bdb8b8;
    }

    .line70 {
      width: 70%;
      height: 5px;
      background-color: #bdb8b8;
    }

    .line60 {
      width: 60%;
      height: 5px;
      background-color: #bdb8b8;
    }

    .line50 {
      width: 50%;
      height: 5px;
      background-color: #bdb8b8;
    }

    .line40 {
      width: 40%;
      height: 5px;
      background-color: #bdb8b8;
    }
    .desimage {
      display: none;
    }
  }
`;
