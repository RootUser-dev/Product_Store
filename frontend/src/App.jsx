import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Create from "./Pages/Create";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
