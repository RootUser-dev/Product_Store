import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
const Create = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");

  const createProduct = async () => {
    try {
      const res = axios.post("http://localhost:5000/api/product", {
        name,
        price,
        image,
      });
      if (res.data.success) {
        message.success("product created");
      }
    } catch (error) {
      message.error("something went wrong");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 min-h-screen flex justify-center ">
      <form className="flex flex-col w-72 gap-2 m-20">
        <label htmlFor="name" className="text-white text-xl">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          className="p-2 rounded-md bg-blue-300 text-white border border-white outline-none"
          onChange={(e) => setname(e.target.value)}
        />

        <label htmlFor="price" className="text-white text-xl">
          Price
        </label>
        <input
          type="number"
          placeholder="Enter price"
          className="p-2 rounded-md bg-blue-300 text-white border border-white outline-none"
          onChange={(e) => setprice(e.target.value)}
        />

        <label htmlFor="img" className="text-white text-xl">
          URL
        </label>
        <input
          type="text"
          placeholder="Enter image url"
          className="p-2 rounded-md bg-blue-300 text-white border border-white outline-none"
          onChange={(e) => setimage(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-700 text-white rounded-md"
          onClick={createProduct}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
