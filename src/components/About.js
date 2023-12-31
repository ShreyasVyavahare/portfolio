import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={6}>
            <img src="" alt="Your Name" />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Write a brief introduction about yourself here. Mention your background, interests, and any relevant experience.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
