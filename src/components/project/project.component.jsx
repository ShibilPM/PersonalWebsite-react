import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import imageOne from "../../assets/images/p1-1.png";
import imageTwo from "../../assets/images/p2-1.png";
import { photoAnimation } from "../../animation/animation";

class Project extends React.Component {
  render() {
    return (
      <ProjectStyle>
        <div className="firstpro">
          <motion.img src={imageOne} variants={photoAnimation} alt="" />
          <span className="firstcaption">Completed</span>
        </div>
        <div className="secondpro">
          <motion.img src={imageTwo} variants={photoAnimation} alt="" />
          <span className="secondcaption">Working On</span>
        </div>
      </ProjectStyle>
    );
  }
}

export default Project;

const ProjectStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 9%;
  text-align: center;
  width: 80%;

  .firstpro {
    width: 100%;
    height: auto;
    position: relative;
  }

  .secondpro {
    width: 100%;
    height: auto;
    position: relative;
  }

  .firstcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .secondcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  img {
    width: 100%;
  }

  .firstpro:hover {
    img {
      opacity: 0.5;
    }

    .firstcaption {
      opacity: 1;
    }
  }

  .secondpro:hover {
    img {
      opacity: 0.5;
    }

    .secondcaption {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
