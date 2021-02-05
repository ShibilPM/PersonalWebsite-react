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
      <div className="desskills">
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
  display: grid;
  grid-template-columns: 35% 35%;
  align-items: center;
  justify-content: center;
  grid-gap: 2.5%;
  color: white;
  padding-top: 30px;

  .desskills {
    display: flex;
    flex-direction: column;
  }

  .desimage {
  }

  .line {
    width: 80%;
    height: 5px;
    background-color: #bdb8b8;
  }

  .line60 {
    width: 65%;
    height: 5px;
    color: white;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
    }

    .desskills {
      width: 80%;
    }

    .line {
      width: 100%;
    }
    .desimage {
      display: none;
    }
  }
`;
