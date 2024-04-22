import React from "react";
import Settings from "./Settings";

const Header = ({ title }) => {
  return (
    <>
      <div className="">
        <div className="pt-4 pl-8">
          <h1 className="py-2 text-2xl font-semibold "> {title}</h1>
          {/* <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>  */}
        </div>
        <hr className="mt-4" />
      </div>
    </>
  );
};

export default Header;
