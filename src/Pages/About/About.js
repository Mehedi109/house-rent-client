import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/img-8.jpg";
import img2 from "../../images/img-2.jpg";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about mb-5">
        <div className="about-banner">
          <h2>About Us</h2>
        </div>
        <div className="about-body">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <img src={img2} alt="" />
              </Col>
              <Col xs={12} md={12} lg={6} className="about-content p-5">
                <h3>About Us</h3>
                <p>
                  Rent House is a rent service website of different type of
                  houses over the whole world. We provide the service for rent a
                  house choice of the customers so that they don't need to face
                  any hassle for searching house for rent because there are many
                  houses for rent but it's very tough for customers to searching
                  physically. So our service will help the people so that they
                  can find their desired house by searching in online. They
                  don't need to move here from there for searching only for
                  house. Also the owner of the house who want to rent their
                  house can post our website and then customer will book and
                  contact with them. So the service is more useful for both
                  owner and customers.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
