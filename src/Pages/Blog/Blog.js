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
        <Row className="g-5">
          <Col xs={12} md={6} lg={4}>
            <Card className="">
              <a
                target="blank"
                href="https://medium.com/@mehedialam109/saas-and-media-query-394f96870ffc"
              >
                <Card.Img
                  className="blog-image blog"
                  variant="top"
                  src={img1}
                />
                <Card.Body>
                  <h6>CSS important topics</h6>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <a href="https://medium.com/@mehedialam109/saas-and-media-query-394f96870ffc">
                  CSS
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <a href="https://medium.com/@mehedialam109/saas-and-media-query-394f96870ffc">
                  CSS
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
