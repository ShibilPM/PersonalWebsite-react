import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>&#169; Shibil PM</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  color: #616060;
  text-align: center;
  padding-bottom: 20px;
`;
