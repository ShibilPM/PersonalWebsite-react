import React from "react";
import styled from "styled-components";

import Education from "../../components/education/education.component";
import Development from "../../components/development/development.component";

class AboutPage extends React.Component {
  render() {
    return (
      <AboutPageStyle>
        <Education />
        <Development />
      </AboutPageStyle>
    );
  }
}

export default AboutPage;

const AboutPageStyle = styled.div`
  padding-top: 50px;
`;
