import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createProduct = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/product", {
        name,
        price,
        image,
      });
      if (res.data.success) {
        message.success("Product created");
        setName(""); // Clear input fields after successful creation
        setPrice("");
        setImage("");
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 min-h-screen flex justify-center">
      <form
        className="flex flex-col w-72 gap-2 m-20"
        onSubmit={(e) => {
          e.preventDefault();
          createProduct();
        }}
      >
        <label htmlFor="name" className="text-white text-xl">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          className="p-2 rounded-md bg-blue-300 text-white border border-white outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="price" className="text-white text-xl">
          Price
        </label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          className="p-2 rounded-md bg-blue-300 text-white border border-white outline-none"
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="img" className="text-white text-xl">
          URL
        </label>
        <input
          type="text"
          placeholder="Enter image URL"
          value={image}
          className="p-2 rounded-md bg-blue-300 text-white border border-white outline-none"
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-700 text-white rounded-md p-2 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
