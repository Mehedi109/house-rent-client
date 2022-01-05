import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleRent from "./SingleRent";

const Rent = () => {
  const [rents, setRents] = useState([]);
  useEffect(() => {
    fetch("https://guarded-savannah-79349.herokuapp.com/rent")
      .then((res) => res.json())
      .then((data) => setRents(data));
  }, []);
  return (
    <div>
      <h1>Total Result: {rents.length}</h1>
      <Row xs={1} md={3} className="g-4">
        {rents.map((rent) => (
          <SingleRent key={rent._id} rent={rent}></SingleRent>
        ))}
      </Row>
    </div>
  );
};

export default Rent;
