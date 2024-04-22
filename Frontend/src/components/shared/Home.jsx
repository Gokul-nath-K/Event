import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgPlaceholder from "../../assets/images/img_alt.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative w-full">
          <LazyLoadImage
            src="https://ik.imagekit.io/gokulnathk/PartyEvent/party05(1).jpg"
            placeholderSrc={imgPlaceholder}
            alt="Image Alternate"
            width={1530}
            height={780}
            // effect="blur"
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
      </div>
    </>
  );
};

export default Home;
