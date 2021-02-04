import React from "react";
import styled from "styled-components";

import Project from "../../components/project/project.component";

class ProjectPage extends React.Component {
  render() {
    return (
      <ProjectPageStyle>
        <Project />
      </ProjectPageStyle>
    );
  }
}

export default ProjectPage;

const ProjectPageStyle = styled.div`
  padding-top: 90px;
  color: white;
`;
