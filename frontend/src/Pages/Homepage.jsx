import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { message } from "antd";

const Homepage = () => {
  // State to store products
  const [products, setProducts] = useState([]); // Initialize products as an empty array

  // Function to fetch all products
  const allProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product");

      if (res.data.success) {
        setProducts(res.data.data); // Set products to the data array
      } else {
        message.error("Failed to fetch products");
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  // Call allProducts function when the component mounts
  useEffect(() => {
    allProducts(); // Call the function here
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-10 min-h-screen">
      <div className="flex gap-10 flex-wrap justify-center">
        {/* Map over products and render a Card for each product */}
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product._id}
            />
          ))
        ) : (
          <p>No products available</p> // Message if no products
        )}
      </div>
    </div>
  );
};

export default Homepage;
