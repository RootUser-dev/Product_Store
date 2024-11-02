import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Effect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);
  return (
    <nav className="sticky top-0 w-full flex justify-between items-center py-3 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
      {/* Logo / Title */}
      <h1 className="text-lg font-semibold text-white sm:text-2xl lg:text-3xl">
        <Link to={"/"}>Product Store</Link>
      </h1>

      {/* Menu Items */}
      <ul className=" sm:flex gap-4 text-lg md:text-xl text-white lg:text-2xl">
        <Link to={"/create"}>Create</Link>
        <li>{time}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
