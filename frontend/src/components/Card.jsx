import { message } from "antd";
import axios from "axios";
import React from "react";

const Card = ({ name, price, image, id }) => {
  const handleDelete = async () => {
    console.log(id);
    try {
      await axios.delete("http://localhost:5000/api/product/" + id);
      window.location.reload();
      message.success("Deleted");
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  const handleEdit = async () => {};
  return (
    <div className="w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Card Image */}
      <div className="bg-gray-400 w-full h-52">
        <img
          src={image ? image : "https://via.placeholder.com/150"} // Placeholder image
          alt="Product"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-md text-gray-700 mt-2">{price}</p>
      </div>

      <div className="flex justify-between w-full p-4">
        <p className="cursor-pointer bg-blue-500 text-white p-1 rounded-md ">
          Edit
        </p>
        <p
          onClick={handleDelete}
          className="cursor-pointer bg-red-500 text-white p-1 rounded-md "
        >
          delete
        </p>
      </div>
    </div>
  );
};

export default Card;
