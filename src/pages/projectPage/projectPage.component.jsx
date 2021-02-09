import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Project from "../../components/project/project.component";

import { pageAnimation } from "../../animation/animation";

class ProjectPage extends React.Component {
  render() {
    return (
      <ProjectPageStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Project />
      </ProjectPageStyle>
    );
  }
}

export default ProjectPage;

const ProjectPageStyle = styled(motion.div)`
  padding-top: 10rem;
  color: white;
`;
