import React from "react";
import { NavLink } from "react-router-dom";

const EventFooter = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center my-10">
        <NavLink
          to="/event"
          className="bg-purple-500 hover:bg-purple-800 p-3 px-10 rounded-lg text-white font-bold"
        >
          All Services
        </NavLink>
      </div>
    </>
  );
};

export default EventFooter;
