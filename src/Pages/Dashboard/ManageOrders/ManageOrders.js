import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Order from "../../Order/Order";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  let serial = 1;
  useEffect(() => {
    const url = "http://localhost:5000/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/order/${id}`;
    const proceed = window.confirm("Are you sure to remove");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Removed Successfully");
            const remaining = orders.filter((house) => house._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h5 className="mb-4">Order List</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>City</th>
            <th>Rent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{serial++}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.country}</td>
              <td>{order.city}</td>
              <td>{order.rent}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order._id)}
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

export default ManageOrders;
