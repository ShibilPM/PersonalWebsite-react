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
  background-color: black;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  position: absolute;
  z-index: 2;
  color: #e9e6e6;
  .logo-container {
    padding-top: 20px;
    height: 100%;
    width: 200px;

    @media (max-width: 757px) {
      position: fixed;
      top: 20px;
      left: 20px;
    }
  }

  .logo {
    width: 6rem;
    height: auto;
    margin-top: 0;
  }
`;
