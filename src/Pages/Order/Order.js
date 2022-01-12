import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

const Order = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  //   const { user, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const url = `https://guarded-savannah-79349.herokuapp.com/houses/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order.price);

  const onSubmit = (data) => {
    fetch("https://guarded-savannah-79349.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Placed");
        }
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5 mb-4">
          <Col xs={12} md={12} lg={6} className="mx-auto">
            <div>
              <img
                className="img-fluid"
                src={`data:image/jpg;base64,${order.image}`}
                alt=""
              />
              <h6 className="mt-4">Country : {order.country}</h6>
              <h6>City : {order.city}</h6>
              <h6>Rent : TK {order.rent}</h6>
              <p>{order.description}</p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="mx-auto mt-5">
            <h5>Place your order</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ margin: "5px" }}
                defaultValue={user.displayName}
                {...register("name")}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={user.email}
                {...register("email", { required: true })}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={order.country}
                {...register("country", { required: true })}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={order.city}
                {...register("city", { required: true })}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={order.rent}
                {...register("rent", { required: true })}
              />{" "}
              <br />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" value="Book" />
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Order;
