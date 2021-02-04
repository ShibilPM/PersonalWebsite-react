import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as DesImage } from "../../assets/design.svg";
import { useScroll } from "../scroll/scroll";
import { reveal } from "../../animation/animation";

const Designing = () => {
  const [element, controls] = useScroll();
  return (
    <DesignStyle
      variants={reveal}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <div className="devskills">
        {" "}
        <h2>Designing</h2>
        <ul>
          <li>
            <p>Illustrator</p>
            <div className="line">
              <span className="line60" />
            </div>
          </li>
          <li>
            <p>Adobe Xd</p>
            <div className="line" />
          </li>
          <li>
            <p>Figma</p>
            <div className="line" />
          </li>
        </ul>
      </div>

      <div className="designimage">
        <DesImage className="desimage" />
      </div>
    </DesignStyle>
  );
};

export default Designing;

const DesignStyle = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  padding-top: 30px;

  .devskills {
    display: flex;
    flex-direction: column;
  }

  .desimage {
    width: 600px;
    height: 400px;
  }

  .line {
    width: 300%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line60 {
    width: 180%;
    height: 5px;
    color: white;
  }
`;
