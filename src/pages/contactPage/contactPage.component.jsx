import React from "react";
import styled from "styled-components";

import Contact from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";

class ContactPage extends React.Component {
  render() {
    return (
      <ContactPageStyle>
        <Contact />
        <Footer />
      </ContactPageStyle>
    );
  }
}

export default ContactPage;

const ContactPageStyle = styled.div`
  padding-top: 90px;
  color: white;
`;
