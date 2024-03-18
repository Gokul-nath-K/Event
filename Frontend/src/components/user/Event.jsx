import React from "react";
import { EventConstants } from "../../constants/EventConstants";
import Wedding from "../../Pages/Events/Wedding";

const Event = ({ length }) => {
  console.log(length);
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {EventConstants &&
          EventConstants.map(
            (data) =>
              data.id <= length && (
                <div key={data.id} className="mx-5 my-5">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                      className="w-full"
                      src={
                        "https://ik.imagekit.io/gokulnathk/PartyEvent/" +
                        data.img_src
                      }
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 font-text text-center">{data.title } </div>
                      <p className="text-gray-700 text-base">
                        {data.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    </>
  );
};
export default Event;