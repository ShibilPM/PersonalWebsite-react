import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Contact from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";

import { pageAnimation } from "../../animation/animation";

class ContactPage extends React.Component {
  render() {
    return (
      <ContactPageStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Contact />
      </ContactPageStyle>
    );
  }
}

export default ContactPage;

const ContactPageStyle = styled(motion.div)`
  padding-top: 90px;
  color: white;
`;
