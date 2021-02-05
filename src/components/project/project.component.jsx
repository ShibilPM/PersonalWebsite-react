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
  grid-gap: 5px;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  .firstpro {
    width: 100%;
    height: auto;
  }

  .secondpro {
    width: 100%;
    height: auto;
  }

  .firstcaption {
    position: absolute;
    top: 45%;
    left: 30%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .secondcaption {
    position: absolute;
    top: 45%;
    right: 17%;
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

  @media (max-width: 950px) {
    .firstcaption {
      top: 35%;
    }

    .secondcaption {
      top: 35%;
      right: 13%;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }

    .firstcaption {
      top: 7rem;
      left: 50%;
    }

    .secondcaption {
      top: 27rem;
      left: 50%;
    }
  }

  @media (max-width: 527px) {
    .firstcaption {
      top: 6rem;
    }

    .secondcaption {
      top: 19rem;
    }
  }

  @media (max-width: 477px) {
    .firstcaption {
      top: 5rem;
    }

    .secondcaption {
      top: 17rem;
    }
  }

  @media (max-width: 401px) {
    .firstcaption {
      display: none;
    }

    .secondcaption {
      display: none;
    }
  }
`;
