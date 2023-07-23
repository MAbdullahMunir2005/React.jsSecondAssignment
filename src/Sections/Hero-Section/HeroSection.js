import React from "react";
import Img3 from "../../Assets/HeroSection/RocketLaunch.png";
import Card from "../../Components/Card/CardSection";

export default function HeroSection() {
  return (
    
      <div className="mx-auto bg-[#2B2B2B] md:flex justify-evenly  py-20 block">
        <div className="md:w-[40%] w-auto">
          <h1 className="md:text-[68px] text-4xl text-white my-5 font-bold gap-2">
            Discover <br /><br /> digital art & <br /><br /> Collect NFTs
          </h1>
          <p className="text-white my-5 text-lg">
            NFT marketplace UI created with Anima for <br /> Figma. Collect, buy and
            sell art from more <br/> than 20k NFT artists.
          </p>
          <button className="flex bg-[#A259FF] rounded-xl py-2 px-4 my-[5px]">
            <img src={Img3} alt="" />
            <p className="text-white font-mono">Get Started</p>
          </button>
          <ul className="flex my-5">
            <li className="mx-5">
              <p className="text-white text-2xl font-bold font-WorkSance">240k+</p>
              <p className="text-white">Total Sale</p>
            </li>
            <li className="mx-5">
              <p className="text-white text-2xl font-bold font-WorkSance">100k+</p>
              <p className="text-white">Auctions</p>
            </li>
            <li className="mx-5">
              <p className="text-white text-2xl font-bold font-WorkSance">240k+</p>
              <p className="text-white">Artists</p>
            </li>
          </ul>
        </div>
        <div>
            <Card/>
        </div>
      </div>
  );
}
