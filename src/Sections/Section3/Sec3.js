import React from "react";
import Rocket from "../../Assets/Section03/RocketLaunch.png";
import Card from "../../Components/section3Component/Section3";
import Img1 from "../../Assets/Section03/Avatar 1.png";
import Img2 from "../../Assets/Section03/Avatar 2.png";
import Img3 from "../../Assets/Section03/Avatar 3.png";
import Img4 from "../../Assets/Section03/Avatar 4.png";
import Img5 from "../../Assets/Section03/Avatar 5.png";
import Img6 from "../../Assets/Section03/Avatar 6.png";
import Img7 from "../../Assets/Section03/Avatar 7.png";
import Img8 from "../../Assets/Section03/Avatar 8.png";
import Img9 from "../../Assets/Section03/Avatar 9.png";
import Img10 from "../../Assets/Section03/Avatar 10.png";
import Img11 from "../../Assets/Section03/Avatar 11.png";
import Img12 from "../../Assets/Section03/Avatar 12.png";

export default function Sec3() {
  return (
    <div className="md:px-[195px] py-[80px] md:mx-[0px]">
      <h1 className="text-[68px] text-white my-5 md:mx-5 mx-5">
        Top creators
      </h1>
      <div className=" md:flex block text-center">
        <p className="text-white">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
        <button className="flex text-white bg-black rounded-3xl border-solid border-2 border-purple-500 hover:border-dotted py-2 px-7 mx-auto sm:my-5 md:my-0 sm:w-60 md:w-36">
          <img src={Rocket} alt="..." />
          <p className="text-white">Rocket</p>
        </button>
      </div>
      <div className="lg:flex block mx-auto gap-28 my-10">
        <Card number="1" src={Img1} />
        <Card number="2" src={Img2} />
        <Card number="3" src={Img3} />
        <Card number="4" src={Img4} />
      </div>
      <div className="lg:flex block mx-auto gap-28 my-10">
        <Card number="5" src={Img5} />
        <Card number="6" src={Img6} />
        <Card number="7" src={Img7} />
        <Card number="8" src={Img8} />
      </div>
      <div className="lg:flex block mx-auto gap-28 my-10">
        <Card number="9" src={Img9} />
        <Card number="10" src={Img10} />
        <Card number="11" src={Img11} />
        <Card number="12" src={Img12} />
      </div>
    </div>
  );
}
