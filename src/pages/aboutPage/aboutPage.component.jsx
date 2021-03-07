import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { pageAnimation } from "../../animation/animation";

import Education from "../../components/education/education.component";
import Development from "../../components/development/development.component";
import Designing from "../../components/designing/designing.component";
import Footer from "../../components/footer/footer.component";

class AboutPage extends React.Component {
  render() {
    return (
      <AboutPageStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Education />
        <Development />
        <Designing />
        <div className="footer">
          <Footer />
        </div>
      </AboutPageStyle>
    );
  }
}

export default AboutPage;

const AboutPageStyle = styled(motion.div)`
  padding-top: 50px;
`;
