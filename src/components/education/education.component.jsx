import React from "react";
import styled from "styled-components";

import { ReactComponent as Eduimage } from "../../assets/education.svg";

class Education extends React.Component {
  render() {
    return (
      <EduPageStyle>
        <div className="edudetail">
          <h1>Education</h1>
          <h3>BE in Electrical and Electronics Engineering</h3>
          <p>Yenepoya Institute of technology</p>
          <p>Mangalore</p>
        </div>

        <Eduimage className="eduimage" />
      </EduPageStyle>
    );
  }
}

export default Education;

const EduPageStyle = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  grid-gap: 2px;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 9.5rem;
  .edudetail {
  }
  .eduimage {
    width: 500px;
    height: auto;
  }

  @media (max-width: 1168px) {
    display: grid;
  }
`;
