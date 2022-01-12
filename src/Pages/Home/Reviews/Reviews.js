import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import img1 from "../../../images/user.png";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://guarded-savannah-79349.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mb-5">
      <Container>
        <h3 className="mt-5 mb-3">Our happy client says</h3>
        <Row className="g-4">
          {reviews.map((review) => (
            <Col xs={12} md={6} lg={4}>
              <div
                className="card p-3 text-center px-4"
                style={{ height: "" }}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="user-content">
                  <img
                    src={img1}
                    alt=""
                    width="250"
                    style={{ paddingBottom: "" }}
                  />
                  <h5 className="">{review.name}</h5>{" "}
                  <h6 className="">{review.email}</h6> <p>{review.message}</p>
                </div>
                {/* <Rating
                 className="text-danger"
                 initialRating={review.rating}
                 emptySymbol="far fa-star"
                 fullSymbol="fas fa-star"
               ></Rating> */}
              </div>
            </Col>
          ))}
          {/* <Col xs={12} md={6} lg={4}>
            <div
              className="card p-3 text-center px-4"
              style={{ height: "" }}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="user-content">
                <img
                  src={img1}
                  alt=""
                  width="250"
                  style={{ paddingBottom: "" }}
                />
                <h5 className="">Mehedi</h5>{" "}
                <h6 className="">mehedi@gmail.com</h6>{" "}
                <p>Wow the service that you are providing is very effective</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
              className="card p-3 text-center px-4"
              style={{ height: "" }}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="user-content">
                <img
                  src={img1}
                  alt=""
                  width="250"
                  style={{ paddingBottom: "" }}
                />
                <h5 className="">Mehedi</h5>{" "}
                <h6 className="">mehedi@gmail.com</h6>{" "}
                <p>Wow the service that you are providing is very effective</p>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
