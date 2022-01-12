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
  const [displayHouses, setDisplayHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/houses")
      .then((res) => res.json())
      // .then((data) => setHouses(data));
      .then((data) => {
        setHouses(data);
        setDisplayHouses(data);
      });
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedHouses = houses.filter(
      (house) =>
        house.country.toLowerCase().includes(searchText.toLowerCase()) ||
        house.city.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayHouses(matchedHouses);
  };

  return (
    <div>
      <h3 className="mb-4">Houses</h3>
      <InputGroup className="mb-3 search-button">
        <FormControl
          onChange={handleSearch}
          placeholder="Enter that you searching"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <Container className="mb-5">
        <Row className="g-4">
          {displayHouses.map((house) => (
            <House key={house._id} house={house}></House>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Houses;
