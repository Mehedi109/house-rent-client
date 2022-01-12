import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  let serial = 1;

  useEffect(() => {
    const url = `https://guarded-savannah-79349.herokuapp.com/myOrders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://guarded-savannah-79349.herokuapp.com/orders/${id}`;
    const proceed = window.confirm("Are you sure to cancel your order");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Your Order has Canceled");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h5 className="mb-4">My Orders</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
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
              <td>{order.email}</td>
              <td>{order.country}</td>
              <td>{order.city}</td>
              <td>{order.rent}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
