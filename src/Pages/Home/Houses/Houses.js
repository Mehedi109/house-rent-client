import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Houses.css";
import img1 from "../../../images/img-1.jpg";
import img2 from "../../../images/img-2.jpg";
import img3 from "../../../images/img-3.jpg";
import House from "../House/House";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/houses")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  return (
    <div>
      <h3 className="mt-5 mb-4">Houses</h3>
      <InputGroup className="mb-3 w-25 search-button">
        <FormControl
          placeholder="Enter that you searching"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <Container className="mb-5">
        <Row className="g-5">
          {houses.map((house) => (
            <House key={house._id} house={house}></House>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Houses;
