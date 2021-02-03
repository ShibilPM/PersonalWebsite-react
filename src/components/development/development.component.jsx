import React from "react";
import styled from "styled-components";

import { ReactComponent as DevelopImage } from "../../assets/skill1.svg";

class Development extends React.Component {
  render() {
    return (
      <DevelopementStyle>
        <div className="devimage">
          <DevelopImage className="devimage_img" />
        </div>
        <div className="devskills">
          <h2>Developement</h2>
        </div>
      </DevelopementStyle>
    );
  }
}

export default Development;

const DevelopementStyle = styled.div`
  display: flex;
  padding-top: 30px;
  padding-left: 36px;
  background-color: #e7e3e3;
  .devimage_img {
    width: 600px;
    height: auto;
  }
`;
