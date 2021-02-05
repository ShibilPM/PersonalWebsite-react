import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ({ open }) => {
  return (
    <Options open={open}>
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
    </Options>
  );
};

export default Nav;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .option {
    padding: 10px 15px;
    cursor: pointer;
  }

  @media (max-width: 757px) {
    flex-flow: column nowrap;
    background-color: #0e0d0d;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .options {
      position: fixed;
      top: 90px;
      display: flex;
      flex-direction: column;
    }

    .option {
      color: #fff;
      cursor: pointer;
    }
  }
`;
