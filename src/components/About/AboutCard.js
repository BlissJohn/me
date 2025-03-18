import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a <span style={{ color: "#6a0dad" }}>passionate</span> and <span style={{ color: "#6a0dad" }}>versatile</span> technology professional open to all kinds of technical roles within computer science. With a strong foundation in <span style={{ color: "#6a0dad" }}>full stack development</span>, and <span style={{ color: "#6a0dad" }}>secure coding practices</span>, I am eager to apply my skills to real-world challenges across various domains. I thrive in <span style={{ color: "#6a0dad" }}>collaborative environments</span>, quickly adapt to new technologies, and am committed to delivering impactful solutions. I am ready to contribute effectively while continuing to grow professionally.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">John</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
