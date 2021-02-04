import React from "react";
import styled from "styled-components";

import imageOne from "../../assets/images/p1-1.png";
import imageTwo from "../../assets/images/p2-1.png";

class Project extends React.Component {
  render() {
    return (
      <ProjectStyle>
        <div className="firstpro">
          <img src={imageOne} alt="" />
          <h2 className="firstcaption">Completed</h2>
        </div>
        <div className="secondpro">
          <img src={imageTwo} alt="" />
          <h2 className="secondcaption">Working On</h2>
        </div>
      </ProjectStyle>
    );
  }
}

export default Project;

const ProjectStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 2.5rem 5.5rem 3.5rem;
  position: relative;
  text-align: center;
  .firstpro {
    width: 450px;
    height: auto;
  }

  .secondpro {
    width: 450px;
    height: auto;
  }

  .firstcaption {
    position: absolute;
    top: 45%;
    left: 32%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .secondcaption {
    position: absolute;
    top: 45%;
    right: 20%;
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
`;
