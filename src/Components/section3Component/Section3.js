import React from "react";

export default function Section3(props) {
  return (
    <div className="p-5 bg-gray-800 rounded-3xl w-96 my-5 mx-auto">
      <p className="bg-black rounded-full text-white inline-block p-2">{props.number}</p>
      <img src={props.src} alt="..." className="rounded-full mx-auto" />
      <h2 className="text-2xl font-extrabold text-white">{props.title}</h2>
      <div className="flex">
        <p className="text-gray-500 text-xs">Total Sales :</p>
        <p className="text-white text-xs">34.53 ETH</p>
      </div>
    </div>
  );
}
