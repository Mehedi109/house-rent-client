import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  let serial = 1;
  useEffect(() => {
    const url = "https://guarded-savannah-79349.herokuapp.com/contact";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://guarded-savannah-79349.herokuapp.com/contact/${id}`;
    const proceed = window.confirm("Are you sure to remove");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = messages.filter((message) => message._id !== id);
            setMessages(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h5 className="mb-4">Messages</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr>
              <td>{serial++}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(message._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Messages;
