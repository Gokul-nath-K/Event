import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative w-full">
          <img
            src="https://ik.imagekit.io/gokulnathk/PartyEvent/party05(1).jpg"
            className="size-full w-full object-scale-down object-center flex align-middle"
          />
          <div className="absolute top-1/3 flex flex-col align-middle justify-center w-full">
            <div className="flex flex-row justify-center">
            <p className="text-[100px] font-title"> Golden Glitz</p>
            </div>
            <div className="flex flex-row justify-center">
            <p className="text-[100px] font-title">Event Planners</p>
            </div>
          </div>
        </div>
        <div className="fixed overflow-hidden">
          <img src="https://ik.imagekit.io/gokulnathk/PartyEvent/party02.jpg" />
        </div>
      </div>
    </>
  );
};

export default Home;
