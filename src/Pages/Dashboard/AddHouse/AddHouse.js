import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddHouse = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/rent", data);
  };

  return (
    <div>
      <h1>Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} placeholder="Name" />
        <br />
        <input type="number" {...register("Price")} placeholder="Price" />
        <br />
        <input {...register("discrition")} placeholder="discrition" />
        <br />
        <input {...register("country")} placeholder="country" />
        <br />
        <input {...register("city")} placeholder="city" />
        <br />
        <input {...register("url")} placeholder="url" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddHouse;
