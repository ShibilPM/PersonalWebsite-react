import React from "react";
import styled from "styled-components";

class ProjectPage extends React.Component {
  render() {
    return (
      <ProjectPageStyle>
        <h1>Project Page</h1>
      </ProjectPageStyle>
    );
  }
}

export default ProjectPage;

const ProjectPageStyle = styled.div`
  color: white;
`;
