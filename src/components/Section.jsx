import React from "react";

const Section = (props) => {
  const { title, children } = props;
  return (
    <>
      <h1 className="text-xl text-slate-900 font-semibold my-5">{title}</h1>
      <div className="text-xl">{children}</div>
    </>
  );
};

export default Section;
