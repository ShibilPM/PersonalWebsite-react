import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import Burger from "./burger.component";

class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <Burger />
      </NavBar>
    );
  }
}

export default Header;

const NavBar = styled.div`
  background: black;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  position: fixed;
  z-index: 10;
  color: #e9e6e6;
  .logo-container {
    padding-top: 15px;
    height: 30px;

    @media (max-width: 757px) {
      position: fixed;
      left: 20px;
    }
  }

  .logo {
    width: 6rem;
    height: auto;
    margin-top: 0;
  }
`;
