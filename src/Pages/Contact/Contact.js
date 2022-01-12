import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
// import Header from "../shared/Header/Header";

const Contact = () => {
  const [contact, setContact] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/contact")
  //     .then((res) => res.json())
  //     .then((data) => setContact(data));
  // }, []);
  console.log(contact);
  //   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, id) => {
    fetch("https://guarded-savannah-79349.herokuapp.com/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Message Sent Successfully");
        }
      });
  };

  return (
    <div>
      <Header />
      <Container className="mb-5">
        <h3 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h3>
        <div className="d-flex justify-content-center">
          <div
            className="col-md-3 text-center address"
            style={{
              marginLeft: "",
              marginTop: "30px",
              marginBottom: "40px",
            }}
          >
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Central Road, Maulvibazar 3200</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+8801746160411</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@rent-house.com</p>
              </li>
            </ul>
          </div>
        </div>
        <h5>Message Us</h5>
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
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
