import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const House = ({ house }) => {
  const { _id, country, city, rent, image, description } = house;
  return (
    <Col xs={12} md={8} lg={4}>
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={`data:image/jpg;base64,${image}`}
            alt=""
            width="100"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              <h6>Country: {country}</h6>
              <h6>City: {city}</h6>
              <h6>Rent: {rent}/monthly</h6>
              {/* {description.slice(0, 10)} */}
            </Card.Text>
            <Button>Book Now</Button>
          </Card.Body>
          {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
        </Card>
      </div>
    </Col>
  );
};

export default House;
