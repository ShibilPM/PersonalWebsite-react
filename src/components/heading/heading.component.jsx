import React from "react";
import styled from "styled-components";
import Typical from "react-typical";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <MainHeading>
          <SubHeading>Hello There, </SubHeading>
          <h1>
            I'am <Name>Shibil</Name>
          </h1>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={["Developer....", 1000, "Designer....", 1000]}
          />
        </MainHeading>
      </div>
    );
  }
}

export default Heading;

const MainHeading = styled.div`
  color: white;
`;

const SubHeading = styled.span``;

const Name = styled.span`
  font-size: 5rem;
  font-family: "Yusei Magic", sans-serif;
`;
