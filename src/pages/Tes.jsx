import React, { useState } from "react";
import Header from "../components/Header";
import SyntaxCode from "../components/SyntaxCode";

const Tes = () => {
  const codeString = [
    `namespace App\Providers;
                    
  use Illuminate\Support\Facades\Response;
  use Illuminate\Support\ServiceProvider;
                      
  class AppServiceProvider extends ServiceProvider
  {
      /**
      * Bootstrap any application services.
      */
      public function boot(): void
      {
          Response::macro('caps', function (string $value) {
              return Response::make(strtoupper($value));
          });
      }
  }`,
    `/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
  ];
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="lg:max-w-3xl  w-full container mx-auto bg-white p-5 rounded-md">
        <h1 className="text-3xl text-customGray-3 font-semibold my-5">
          Documentation
        </h1>
        <hr />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          consequatur dolorum sit quisquam ipsum, dignissimos eveniet cumque.
          Vel, quam enim.
        </p>
        <SyntaxCode codeString={codeString[1]} />
      </div>
    </div>
  );
};

export default Tes;
