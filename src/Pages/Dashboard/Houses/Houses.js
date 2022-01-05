import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/houses";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>City</th>
            <th>Image</th>
            <th>Rent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr>
              <td>1</td>
              <td>{house.country}</td>
              <td>{house.city}</td>
              <td>{house.rent}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Houses;
