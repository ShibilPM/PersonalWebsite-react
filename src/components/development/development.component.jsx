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
  display: flex;
  padding-top: 30px;
  padding-left: 36px;
  background-color: #e7e3e3;
  padding-bottom: 30px;

  .devimage {
    display: flex;
    align-items: center;
  }

  .devimage_img {
    width: 600px;
    height: auto;
  }

  .line {
    width: 200%;
    height: 5px;
    background-color: #bdb8b8;
  }
`;
