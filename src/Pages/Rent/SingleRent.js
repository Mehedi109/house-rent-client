import React from "react";
import { Col, Card } from "react-bootstrap";

const SingleRent = ({ rent }) => {
  const { Name, Price, discrition, country, city, url } = rent;
  return (
    <div>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={url} style={{ height: "80%" }} />
            <Card.Body>
              <Card.Title>{Name}</Card.Title>
              <Card.Text>{discrition}</Card.Text>
              <Card.Text>Price: {Price}</Card.Text>
              <Card.Text>
                Location: {country}, {city}
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default SingleRent;
