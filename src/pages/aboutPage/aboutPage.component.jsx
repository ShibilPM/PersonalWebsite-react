import React from "react";
import styled from "styled-components";

import Education from "../../components/education/education.component";

class AboutPage extends React.Component {
  render() {
    return (
      <AboutPageStyle>
        <Education />
      </AboutPageStyle>
    );
  }
}

export default AboutPage;

const AboutPageStyle = styled.div`
  padding-top: 50px;
`;
