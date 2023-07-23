import React from "react";
import Img1 from "../../Assets/HeroSection/Avatar Placeholder-9.png";
import Img2 from "../../Assets/HeroSection/Image Placeholder.png";

export default function CardSection() {
  return (
    <div className="md:w-auto md:h-[450px] bg-[#3B3B3B] rounded-3xl my-20">
      <img src={Img2} alt="" className="h-5/6 w-fit" />
      <p className="text-white text-sm mx-4 my-2">Space Walking</p>
      <div className="flex mx-3">
        <img src={Img1} alt="" className="h-5" />
        <p className="text-white">Animakid</p>
      </div>
    </div>
  );
}
