import React, { Children, useState } from "react";
import Header from "../components/Header";

const Content = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="lg:max-w-3xl  w-full container mx-auto bg-white p-5 rounded-md shadow-md mt-10 mb-20">
        {children}
      </div>
    </div>
  );
};

export default Content;
