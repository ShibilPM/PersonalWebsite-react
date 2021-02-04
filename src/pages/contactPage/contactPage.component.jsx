import React from "react";
import styled from "styled-components";

class ContactPage extends React.Component {
  render() {
    return (
      <ContactPageStyle>
        <h1>Contact page</h1>
      </ContactPageStyle>
    );
  }
}

export default ContactPage;

const ContactPageStyle = styled.div`
  padding-top: 40px;
  color: white;
`;
