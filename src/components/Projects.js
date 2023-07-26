import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center">Projects</h2>
        <Row className="mt-4">
          {/* Project 1 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="project-1.jpg" alt="Project 1" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Brief description of Project 1. You can mention what technologies you used and any challenges faced.
                </Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Project 2 */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="project-2.jpg" alt="Project 2" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Brief description of Project 2. You can mention what technologies you used and any challenges faced.
                </Card.Text>
                <Button variant="primary" href="#">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more projects as needed */}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
