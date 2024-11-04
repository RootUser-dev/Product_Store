import { message } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Editmodel = ({ close, id, namea, pricea, imagea }) => {
  const [name, setName] = useState(namea);
  const [price, setPrice] = useState(pricea);
  const [image, setImage] = useState(imagea);

  const editProduct = async () => {
    try {
      const res = await axios.put(`/api/product/${id}`, {
        name,
        price,
        image,
      });
      if (res.data.success) {
        close();
        window.location.reload();
        message.success("Product details updated");
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold">Edit Product</h2>
        <form
          className="flex flex-col w-72 gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            editProduct();
          }}
        >
          <label htmlFor="name" className="text-gray-700 text-xl">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            className="p-2 rounded-md bg-blue-300 text-gray-700 border border-gray-300 outline-none"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="price" className="text-gray-700 text-xl">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            className="p-2 rounded-md bg-blue-300 text-gray-700 border border-gray-300 outline-none"
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="img" className="text-gray-700 text-xl">
            URL
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={image}
            className="p-2 rounded-md bg-blue-300 text-gray-700 border border-gray-300 outline-none"
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-700 text-white rounded-md p-2 mt-4"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={close}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Editmodel;
