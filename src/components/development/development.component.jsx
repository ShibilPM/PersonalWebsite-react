import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as DevelopImage } from "../../assets/skill1.svg";
import { useScroll } from "../scroll/scroll";
import {
  reveal,
  line90Animation,
  line80Animation,
  line70Animation,
  line60Animation,
  line50Animation,
  line40Animation,
} from "../../animation/animation";

const Development = () => {
  const [element, controls] = useScroll();
  return (
    <DevelopementStyle
      variants={reveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <div className="container">
        <div className="devimage">
          <DevelopImage className="devimage_img" />
        </div>
        <div className="devskills">
          <h2>Developement</h2>
          <ul>
            <li>
              <p>HTML5</p>
              <motion.div variants={line90Animation} className="line90" />
            </li>
            <li>
              <p>CSS3</p>
              <motion.div variants={line80Animation} className="line80" />
            </li>
            <li>
              <p>JavaScript</p>
              <motion.div variants={line70Animation} className="line70" />
            </li>
            <li>
              <p>React</p>
              <motion.div variants={line70Animation} className="line70" />
            </li>
            <li>
              <p>BootStrap</p>
              <motion.div variants={line80Animation} className="line80" />
            </li>
            <li>
              <p>Nodejs</p>
              <motion.div variants={line40Animation} className="line40" />
            </li>
            <li>
              <p>PHP</p>
              <motion.div variants={line60Animation} className="line60" />
            </li>
            <li>
              <p>Python</p>
              <motion.div variants={line40Animation} className="line40" />
            </li>
            <li>
              <p>Java</p>
              <motion.div variants={line40Animation} className="line40" />
            </li>
            <li>
              <p>C</p>
              <motion.div variants={line70Animation} className="line70" />
            </li>
            <li>
              <p>C++</p>
              <motion.div variants={line70Animation} className="line70" />
            </li>
          </ul>
        </div>
      </div>
    </DevelopementStyle>
  );
};

export default Development;

const DevelopementStyle = styled(motion.div)`
  background-color: #e7e3e3;
  padding-bottom: 30px;
  width: 100%;
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding-left: 10%;
  }
  .devimage {
    display: flex;
    align-items: center;
  }

  .devimage_img {
    width: 100%;
    height: auto;
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
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    h2 {
      text-align: center;
    }

    .devskills {
      width: 80%;
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

    h2 {
      text-align: center;
    }
  }

  @media (max-width: 630px) {
    .container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
`;
