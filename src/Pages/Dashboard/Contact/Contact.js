import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch("https://agile-sierra-38761.herokuapp.com/contact")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);
  console.log(contact);
  //   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, id) => {
    fetch("https://agile-sierra-38761.herokuapp.com/review", {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("name")}
          placeholder="Name"
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("email")}
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
          Send
        </Button>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default Contact;
