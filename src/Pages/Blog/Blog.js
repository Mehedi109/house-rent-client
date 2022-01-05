import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../../images/blog-1.jpg";
import img2 from "../../images/blog-3.png";
import img3 from "../../images/blog-4.jpg";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row className="g-5 mt-5 mb-5">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg" style={{ border: "none" }}>
              <a
                target="blank"
                href="https://medium.com/@mehedialam109/saas-and-media-query-394f96870ffc"
                style={{ textDecoration: "none" }}
              >
                <Card.Img
                  className="blog-image blog"
                  variant="top"
                  src={img1}
                  style={{ height: "185px" }}
                />
                <Card.Body style={{ height: "100px" }}>
                  <h5 className="mt-3">CSS important topics</h5>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg" style={{ border: "none" }}>
              <a
                target="blank"
                href="https://medium.com/@mehedialam109/saas-and-media-query-394f96870ffc"
                style={{ textDecoration: "none" }}
              >
                <Card.Img
                  className="blog-image blog"
                  variant="top"
                  src={img2}
                  style={{ height: "185px" }}
                />
                <Card.Body style={{ height: "100px" }}>
                  <h5 className="mt-3">CSS important topics</h5>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg" style={{ border: "none" }}>
              <a
                target="blank"
                href="https://medium.com/@mehedialam109/saas-and-media-query-394f96870ffc"
                style={{ textDecoration: "none" }}
              >
                <Card.Img
                  className="blog-image blog"
                  variant="top"
                  src={img3}
                  style={{ height: "185px" }}
                />
                <Card.Body style={{ height: "100px" }}>
                  <h5 className="mt-3">CSS important topics</h5>
                </Card.Body>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
