import React from "react";

const EventCard = () => {
  return (
    <>
      <div className="flex flex-row grow w-full justify-start">
        <div className="my-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] ">
            <div className=" h-[200px] overflow-hidden ">
              <img
                className="w-full "
                src={
                  "https://ik.imagekit.io/gokulnathk/PartyEvent/birthday04.jpg"
                }
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 font-text text-center ">
                {" "}
                Ritu's Birthday{" "}
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam odio fugit ipsa nihil suscipit voluptatum, quidem qui
                ad? Praesentium sint earum ex eaque autem! Voluptas ex
                blanditiis cupiditate quos consequuntur.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[500px] ">
            <div className=" h-[200px] overflow-hidden ">
              <img
                className="w-full "
                src={
                  "https://ik.imagekit.io/gokulnathk/PartyEvent/birthday04.jpg"
                }
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 font-text text-center">
                {" "}
                Ritu's Birthday{" "}
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam odio fugit ipsa nihil suscipit voluptatum, quidem qui
                ad? Praesentium sint earum ex eaque autem! Voluptas ex
                blanditiis cupiditate quos consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
