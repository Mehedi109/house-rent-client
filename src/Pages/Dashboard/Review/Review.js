import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, id) => {
    fetch("https://guarded-savannah-79349.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Posted Successfully");
        }
      });
  };

  return (
    <div>
      <Container className="mb-5">
        <h3 className="h1-responsive font-weight-bold text-center my-4">
          Hit a review
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ padding: "5px", margin: "5px", width: "30%" }}
            {...register("name")}
            defaultValue={user.displayName}
            placeholder="Name"
            required
          />{" "}
          <br />
          <input
            style={{ padding: "5px", margin: "5px", width: "30%" }}
            {...register("email")}
            defaultValue={user.email}
            placeholder="Email"
            type="email"
            required
          />{" "}
          <br />
          <textarea
            rows="4"
            cols="6"
            style={{ padding: "5px", margin: "5px", width: "30%" }}
            {...register("message", { required: true })}
            placeholder="Message"
            required
          />{" "}
          <br />
          <Button variant="primary" type="submit">
            Post
          </Button>
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
        </form>
      </Container>
    </div>
  );
};

export default Review;
