import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/">
            Home
          </Link>
          <Link className="option" to="/about">
            About
          </Link>
          <Link className="option" to="/project">
            Project
          </Link>
          <Link className="option" to="/contact">
            Contact
          </Link>
        </div>
      </NavBar>
    );
  }
}

export default Header;

const NavBar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  position: absolute;
  z-index: 2;
  color: #e9e6e6;
  .logo-container {
    height: 100%;
    width: 70px;
    margin-bottom: 15px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
  .logo {
    width: 6rem;
    height: auto;
    margin-top: -20px;
  }
`;
