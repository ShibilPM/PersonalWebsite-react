import React from "react";
import styled from "styled-components";

import Heading from "../../components/heading/heading.component";

import { ReactComponent as ManWithLap } from "../../assets/manwithlap.svg";

class HomePage extends React.Component {
  render() {
    return (
      <Home>
        <Heading />
        <ManWithLap className="image" />
      </Home>
    );
  }
}

export default HomePage;

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 7px 14px;
  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-weight: normal;
    font-size: 2.5rem;
  }

  .image {
    height: 400px;
  }
`;
