import React from "react";
import AvatarsCard from "../../Components/Avatars card/AvatarsCard";
import Img1 from "../../Assets/Section02/P1-1.png";
import Img2 from "../../Assets/Section02/P1-2.jpg";
import Img3 from "../../Assets/Section02/P1-3.png";
import Img4 from "../../Assets/Section02/P2-1.png";
import Img5 from "../../Assets/Section02/P2-2.png";
import Img6 from "../../Assets/Section02/P2-3.png";
import Img7 from "../../Assets/Section02/P3-1.png";
import Img8 from "../../Assets/Section02/P3-2.png";
import Img9 from "../../Assets/Section02/P3-3.png";
import Img10 from "../../Assets/Section02/Avatar-1.png";
import Img11 from "../../Assets/Section02/Avatar-2.png";
import Img12 from "../../Assets/Section02/Avatar-3.png";
import Last from "../../Assets/Section02/Last.png";

export default function section2() {
  return (
    <div className="bg-[#2B2B2B] py-10">
      <div className="mx-0 md:mx-32">
        <p className="text-2xl text-white font-bold my-5">
          Trending Collection
        </p>
        <p className="text-white my-5">
          Checkout our weekly updated trending collection.
        </p>
        <div className="lg:flex block">
          <AvatarsCard
            src={Img1}
            src2={Img2}
            src3={Img3}
            src4={Last}
            title="DSGN Animals"
            src5={Img10}
            name="MrFox"
          />
          
          <AvatarsCard
            src={Img4}
            src2={Img5}
            src3={Img6}
            src4={Last}
            title="Magic Mushrooms"
            src5={Img11}
            name="Shroomie"
            style={{}}
          />
          <AvatarsCard
            src={Img7}
            src2={Img8}
            src3={Img9}
            src4={Last}
            title="Disco Machines"
            src5={Img12}
            name="BeKind2Robots"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
