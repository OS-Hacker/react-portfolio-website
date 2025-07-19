import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img
                  src={require(`../../assets/images/${data.img}`)}
                  alt=""
                  height="300px"
                />
                <div className="content">
                  <strong className="mb-2">{data.title}</strong>
                  <p className="mb-2" style={{ fontSize: "18px" }}>
                    {data.language}
                  </p>
                  <div>
                    <a href={data.viewCode}>view code</a>
                    {data.viewProject && <a href={data.viewProject}>view project</a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
