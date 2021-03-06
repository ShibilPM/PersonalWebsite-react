import React from "react";
import styled from "styled-components";

import { ReactComponent as Eduimage } from "../../assets/education.svg";

class Education extends React.Component {
  render() {
    return (
      <EduPageStyle>
        <div className="educontainer">
          <div className="edudetail">
            <h1>Education</h1>
            <h3>BE in Electrical and Electronics Engineering</h3>
            <p>Yenepoya Institute of technology</p>
            <p>Mangalore</p>
          </div>

          <Eduimage className="eduimage" />
        </div>
        {/* <div className="eduarrow">
          <i class="far fa-arrow-alt-down"></i>
        </div> */}
      </EduPageStyle>
    );
  }
}

export default Education;

const EduPageStyle = styled.div`
  .educontainer {
    display: grid;
    grid-template-columns: 40% 40%;
    grid-gap: 2px;
    align-items: center;
    justify-content: center;
    color: white;
    padding-bottom: 3rem;
  }
  .edudetail {
  }
  .eduimage {
    width: auto;
    height: auto;
  }

  .eduarrow {
    color: white;
    text-align: center;
  }

  @media (max-width: 945px) {
    padding-top: 40px;
  }

  @media (max-width: 760px) {
    .educontainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .edudetail {
      text-align: center;
    }
  }

  @media (max-width: 630px) {
    .educontainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
