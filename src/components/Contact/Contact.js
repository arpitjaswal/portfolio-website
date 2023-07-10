import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import ContactInfo from "./ContactInfo";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the name, email, and message values from the component state (name, email, message)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <Row>
            <Col md={6} className="contact-header">
              <h1 className="heading">Contact Me</h1>
              <p className="subheading">Get in touch with me</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    value={message}
                    onChange={handleMessageChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <ContactInfo />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
