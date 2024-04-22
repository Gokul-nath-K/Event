import React from "react";
import { EventConstants } from "../../constants/EventConstants";
import Wedding from "../../Pages/Events/weddingdecoration";
import { useNavigate } from "react-router-dom";

const Event = ({ length }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center ">
        {EventConstants &&
          EventConstants.map(
            (data) =>
              data.id <= length && (
                <div
                  key={data.id}
                  className="mx-5 my-10 cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
                  onClick={() => navigate(data.path)}
                >
                  <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-[550px]">
                    <img
                      className="w-full max-h-[300px]"
                      src={
                        "https://ik.imagekit.io/gokulnathk/PartyEvent/" +
                        data.img_src
                      }
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 font-text text-center">
                        {data.title}{" "}
                      </div>
                      <p className="text-gray-700 text-base">{data.content}</p>
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
