import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <Container fluid className="contact-section">

            <Container>
                <h1 className="contact-heading" style={{ textAlign: "center", color: "white" }}>
                    Get in <strong className="purple">Touch</strong>
                </h1>
                <p style={{ color: "white", textAlign: "center" }}>
                    Feel free to reach out via email, LinkedIn, or GitHub.
                </p>

                <Row className="justify-content-center" style={{ paddingBottom: "30px", textAlign: "center" }}>
                    <Col xs={4} md={2} className="contact-icons" style={{ display: "flex", justifyContent: "center" }}>
                        <a
                            href="https:linkedin.com/in/john-bantu-5750b6188"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-link"
                        >
                            <FaLinkedin size={40} color="#0e76a8" />
                        </a>
                    </Col>

                    <Col xs={4} md={2} className="contact-icons" style={{ display: "flex", justifyContent: "center" }}>
                        <a href="mailto:johnvbliss7@gmail.com" className="icon-link">
                            <FaEnvelope size={40} color="#ffffff" />
                        </a>
                    </Col>

                    <Col xs={4} md={2} className="contact-icons" style={{ display: "flex", justifyContent: "center" }}>
                        <a
                            href="https://github.com/blissjohn"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-link"
                        >
                            <FaGithub size={40} color="#ffffff" />
                        </a>
                    </Col>
                </Row>

                <ContactForm />

            </Container>
        </Container>
    );
};

export default Contact;
