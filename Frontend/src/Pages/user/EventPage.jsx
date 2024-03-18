import React from "react";
import Event from "../../components/user/Event";
import { EventConstants } from "../../constants/EventConstants";

const EventPage = ({ length = EventConstants.length }) => {
  return (
    <>
      <div className="bg-white relative my-[1%]">
        <div className="flex justify-center py-5 ">
          <p className="text-[35px]">OUR SERVICES</p>
        </div>
        <Event length={length} />
      </div>
    </>
  );
};

export default EventPage;
