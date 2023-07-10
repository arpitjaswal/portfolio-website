import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import xpense from "../../Assets/Projects/xpense-logger.png";
import editor from "../../Assets/Projects/codeEditor.png";
import GutarGu from "../../Assets/Projects/gutargu.png";
import ImageGen from "../../Assets/Projects/imagegen.png";
import rescuemeals from "../../Assets/Projects/rescuemeals.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GutarGu}
              isBlog={false}
              title="GutarGu"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/arpitjaswal/GutarGu"
              demoLink="https://gutargu.onrender.com/"
            />
          </Col>

         

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xpense}
              isBlog={false}
              title="XpenseLogger"
              description="The expense tracker webapp is built using ReactJS, a JavaScript library for building user interfaces. It uses the ContextAPI to manage state and the useReducer, useState, and useContext hooks to allow users to track their expenses by adding, editing, and deleting transactions. "
              ghLink="https://github.com/arpitjaswal/XpenseLogger"g
              demoLink="https://xpense-logger.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageGen}
              isBlog={false}
              title="AI image generator"
              description="An AI image generator that seamlessly integrates with DALL-E, a state-of-the-art machine learning model. By leveraging DALL-E's capabilities, users can input text prompts and obtain highly realistic and diverse images as output."
              
              demoLink="https://github.com/arpitjaswal/imageGenerationAI"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rescuemeals}
              isBlog={false}
              title="RescueMeals"
              description="A food management system aimed at tackling the problem of leftover food being wasted by the restaurants by giving a MERN stack powered platform to the NGOs, volunteers and restaurants."
              ghLink="https://github.com/arpitjaswal/RescueMeals"
              demoLink="https://rescuemeals.onrender.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
