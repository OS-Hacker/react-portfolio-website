import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills, skills_2 } from "../../content_option";
import "./style.css";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row>
          <Col lg="8">
            <h1 className="display-4 mb-1">About me</h1>
            <hr className="t_border my-1 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" md="6" sm="12" className="text-center">
            <img
              // eslint-disable-next-line
              src={require("../../assets/images/photo.png")}
              width="205px"
              height="205px"
              className="img-fluid"
              alt="Description of the image"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg="7" md="6" sm="12" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <h3 className="color_sec text-center">Skills</h3>

        <Row className="sec_sp">
          <Col lg="6" md="12" sm="12" style={{ fontFamily: "cursive" }}>
            {skills.map((data, i) => (
              <div key={i} className="mb-3">
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${data.value}%` }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col lg="6" md="12" sm="12">
            {skills_2.map((data, i) => (
              <div key={i} className="mb-3">
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${data.value}%` }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
