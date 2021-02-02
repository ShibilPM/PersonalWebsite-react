import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <div className="logo-container" to="/">
          <Logo className="logo" />
        </div>
        <div className="options">
          <div className="option" to="/shop">
            Home
          </div>
          <div className="option" to="/shop">
            About
          </div>
          <div className="option" to="/shop">
            Project
          </div>
          <div className="option" to="/shop">
            Contact
          </div>
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