import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Classroom Feature"
              organization="KOTC"
              description="I developed the classroom feature for their interactive learning platform using Flutter. My work involved designing and enhancing web pages, optimizing layouts for better user engagement, and improving overall performance. I also integrated API calls to ensure seamless data synchronization across user sessions, providing a smooth and interactive classroom experience."
              ghLink="https://github.com/kotc-org/kotc-classroom.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Movie Review System"
              organization="Wipro"
              description="MI developed a dynamic movie review platform using Spring Boot, Angular, and MySQL, enabling users to explore, review, and rate movies. I designed an intuitive UI to ensure a seamless user experience, implemented a robust backend for efficient data management, and optimized API interactions for smooth performance."
              ghLink="https://github.com/BlissJohn/movie_review_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Food Delivery website"
              organization="techmihirnaik"
              description="I developed responsive UI components using Angular for a food delivery platform, enhancing user experience and accessibility across devices. I integrated RESTful APIs to improve functionality and ensure seamless data flow. Additionally, I conducted regular code reviews, maintaining high-quality standards and optimizing performance."       
            />
          </Col>

                 </Row>
      </Container>
    </Container>
  );
}

export default Projects;
