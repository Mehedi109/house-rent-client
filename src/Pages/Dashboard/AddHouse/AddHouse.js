import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddHouse = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [rent, setRent] = useState();
  const [description, setDescription] = useState();
  const [img, setImg] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!img) {
      return;
    }

    const formData = new FormData();
    formData.append("country", country);
    formData.append("city", city);
    formData.append("rent", rent);
    formData.append("description", description);
    formData.append("image", img);
    console.log(formData);
    fetch("https://agile-sierra-38761.herokuapp.com/addCategories", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("data added");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("country")}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("city")}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("rent", { required: true })}
          placeholder="Rent"
          onChange={(e) => setRent(e.target.value)}
          required
        />{" "}
        <br />
        <textarea
          rows="4"
          cols="6"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("description", { required: true })}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />{" "}
        <br />
        <input
          accept="image/*"
          multiple
          type="file"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("image", { required: true })}
          placeholder="Image"
          onChange={(e) => setImg(e.target.files[0])}
          required
        />{" "}
        <Button variant="primary" type="submit">
          Add
        </Button>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddHouse;
