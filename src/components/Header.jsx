import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-slate-300 shadow-sm">
      <section className="h-20 max-w-3xl mx-auto items-center flex justify-between">
        <h1 className="text-3xl font-bold text-customGray-2">Arip Budiman</h1>
        <ul className="flex gap-x-5">
          <li>
            <a href="http://">Home</a>
          </li>
          <li>
            <a href="http://">About</a>
          </li>
          <li>
            <a href="http://"></a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
