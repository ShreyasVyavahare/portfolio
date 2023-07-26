import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaJs, FaReact, FaCode, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-5">
      <Container>
        <h2 className="text-center">Skills</h2>
        <br></br>
        <Row className="text-center">
          <Col sm={4} md={2}>
            <FaHtml5 size={50} className="mb-3" />
            <p>HTML5</p>
          </Col>
          <Col sm={4} md={2}>
            <FaCss3 size={50} className="mb-3" />
            <p>CSS3</p>
          </Col>
          <Col sm={4} md={2}>
            <FaJs size={50} className="mb-3" />
            <p>JavaScript</p>
          </Col>
          <Col sm={4} md={2}>
            <FaReact size={50} className="mb-3" />
            <p>React</p>
          </Col>
          <Col sm={4} md={2}>
            <FaCode size={50} className="mb-3" />
            <p>Backend Development</p>
          </Col>
          <Col sm={4} md={2}>
            <FaDatabase size={50} className="mb-3" />
            <p>Database</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
