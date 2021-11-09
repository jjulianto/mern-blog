import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
