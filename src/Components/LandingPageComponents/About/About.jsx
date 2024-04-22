import "./About.css";
import React from "react";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";
import about3 from "../img/about3.png";
import about4 from "../img/about4.png";
import about5 from "../img/about5.png";
import bg from "../img/hero-bg.png";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <h3 className="text-break about-text">
              AURA CANVAS helps creators to start their own brand through
              collaborations and partnerships. aura canvas provides end-to-end
              tools to launch, build and scale creator-led D2C brands AND
              expanding into online and retails through data-driven strategies.
            </h3>
          </Col>
          <Col xs={6} md={2}>
            <div className="about-pic">
              <img src={about1} alt="" />
            </div>
          </Col>
          <Col xs={6} md={2}>
            <div className="about-pic">
              <img src={about2} alt="" />
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div className="about-pic fourth">
              <img src={about3} alt="" />
            </div>
          </Col>
        </Row>

        {/* Row-2 */}
        <Row>
          <Col xs={12} md={6}>
            <div className="row-2">
              <img src={bg} alt="" />
            </div>
          </Col>

          <Col xs={6} md={3}>
            <div className="row-2 none">
              <img src={about4} alt="" />
            </div>
          </Col>

          <Col xs={6} md={3}>
            <div className="row-2 none">
              <img src={about5} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
