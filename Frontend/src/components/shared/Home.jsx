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
          <div className="absolute top-1/3 flex align-middle justify-center w-full">
            <p className="text-[50px]">Event Makers</p>
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
