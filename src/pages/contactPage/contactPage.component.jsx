import React from "react";
import styled from "styled-components";

import Contact from "../../components/contact/contact.component";

class ContactPage extends React.Component {
  render() {
    return (
      <ContactPageStyle>
        <Contact />
      </ContactPageStyle>
    );
  }
}

export default ContactPage;

const ContactPageStyle = styled.div`
  padding-top: 40px;
  color: white;
`;
