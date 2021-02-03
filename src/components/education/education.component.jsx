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
  display: flex;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  padding-bottom: 9.5rem;
  .edudetail {
    padding-right: 356px;
    padding-top: 156px;
  }
  .eduimage {
    position: absolute;
    width: 600px;
    height: auto;
    top: 30px;
    right: 156px;
  }
`;
