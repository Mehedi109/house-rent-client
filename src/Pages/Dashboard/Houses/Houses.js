import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  let serial = 1;
  useEffect(() => {
    const url = "http://localhost:5000/houses";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/houses/${id}`;
    const proceed = window.confirm("Are you sure to remove");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Removed Successfully");
            const remaining = houses.filter((house) => house._id !== id);
            setHouses(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h5 className="mb-4">House List</h5>
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
              <td>{serial++}</td>
              <td>{house.country}</td>
              <td>{house.city}</td>
              <td>
                <img
                  src={`data:image/jpg;base64,${house.image}`}
                  alt=""
                  width="100"
                />
              </td>
              <td>{house.rent}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(house._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Houses;
