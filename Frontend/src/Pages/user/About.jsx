import React from "react";

const About = () => {
  const img01 = "https://ik.imagekit.io/gokul/PartyEvent/wedding-1.jpg";
  const img02 = "https://ik.imagekit.io/gokulnathk/PartyEvent/party03.jpg";
  const img03 = "https://ik.imagekit.io/gokulnathk/PartyEvent/party04.jpg";

  return (
    <>
      <div className=" z-40 overflow-hidden relative mx-[4%] my-[1%]">
        <div className="flex justify-center py-5">
          <p className="text-[35px]">ABOUT US</p>
        </div>
        <div className="w-full flex flex-row mb-5">
          <img src={img01} className="w-2/5" />
          <p className="p-10 flex items-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            esse aspernatur, unde doloremque in dignissimos quod sunt facilis
            perferendis officiis ea quo enim velit, ab ipsam, dolores voluptatem
            error placeat?
          </p>
        </div>
        <div className="w-full flex flex-row mb-5">
          <p className="p-10 flex items-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            esse aspernatur, unde doloremque in dignissimos quod sunt facilis
            perferendis officiis ea quo enim velit, ab ipsam, dolores voluptatem
            error placeat?
          </p>
          <img src={img02} className="w-2/5" />
        </div>
        <div className="w-full flex flex-row mb-5">
          <img src={img03} className="w-2/5" />
          <p className="p-10 flex items-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            esse aspernatur, unde doloremque in dignissimos quod sunt facilis
            perferendis officiis ea quo enim velit, ab ipsam, dolores voluptatem
            error placeat?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
