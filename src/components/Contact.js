import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <Container>
        <h2 className="text-center">Contact Me</h2>
        <Row className="mt-4">
          <Col md={6}>
            <p>
              Feel free to get in touch with me through the following channels. I'd love to hear from you!
            </p>
            <ul>
              <li>Email: your.email@example.com</li>
              <li>LinkedIn: your-linkedin-url</li>
              <li>GitHub: your-github-username</li>
            </ul>
          </Col>
          {/* You can add a contact form here if you prefer */}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
