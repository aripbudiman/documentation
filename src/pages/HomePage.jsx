import React, { useState } from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="bg-gray-500">
      <Header />
      <div className="bg-white">
        <h1>Hello World, ini adalah homepage</h1>
      </div>
    </div>
  );
};

export default HomePage;
