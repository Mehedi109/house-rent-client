import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";

const House = ({ house }) => {
  const { _id, country, city, rent, image, description } = house;

  const history = useNavigate();

  const url = `/order/${_id}`;
  const handleOrder = () => {
    history(url);
  };

  return (
    <Col xs={12} md={8} lg={4}>
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={`data:image/jpg;base64,${image}`}
            alt=""
            width="100"
            height="200px"
          />
          <Card.Body>
            <Card.Text>
              <h6>Country: {country}</h6>
              <h6>City: {city}</h6>
              <h6>Rent: {rent}/monthly</h6>
              {/* {description} */}
            </Card.Text>
            <Button onClick={handleOrder}>Details</Button>
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
