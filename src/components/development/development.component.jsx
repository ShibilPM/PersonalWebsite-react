import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as DevelopImage } from "../../assets/skill1.svg";
import { useScroll } from "../scroll/scroll";
import { reveal } from "../../animation/animation";

const Development = () => {
  const [element, controls] = useScroll();
  return (
    <DevelopementStyle
      variants={reveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <div className="devimage">
        <DevelopImage className="devimage_img" />
      </div>
      <div className="devskills">
        <h2>Developement</h2>
        <ul>
          <li>
            <p>HTML5</p>
            <div className="line" />
          </li>
          <li>
            <p>CSS3</p>
            <div className="line" />
          </li>
          <li>
            <p>JavaScript</p>
            <div className="line" />
          </li>
          <li>
            <p>React</p>
            <div className="line" />
          </li>
          <li>
            <p>BootStrap</p>
            <div className="line" />
          </li>
          <li>
            <p>Nodejs</p>
            <div className="line" />
          </li>
          <li>
            <p>PHP</p>
            <div className="line" />
          </li>
          <li>
            <p>Python</p>
            <div className="line" />
          </li>
          <li>
            <p>Java</p>
            <div className="line" />
          </li>
          <li>
            <p>C</p>
            <div className="line" />
          </li>
          <li>
            <p>C++</p>
            <div className="line" />
          </li>
        </ul>
      </div>
    </DevelopementStyle>
  );
};

export default Development;

const DevelopementStyle = styled(motion.div)`
  display: grid;
  grid-template-columns: 35% 35%;
  grid-gap: 2.5%;
  justify-content: center;
  align-items: center;
  background-color: #e7e3e3;
  padding-bottom: 30px;
  width: 100%;
  .devimage {
    display: flex;
    align-items: center;
  }

  .devimage_img {
    width: 90%;
    height: auto;
  }

  .line {
    width: 80%;
    height: 5px;
    background-color: #bdb8b8;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
    }

    .devskills {
      width: 80%;
    }

    .line {
      width: 100%;
    }
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
