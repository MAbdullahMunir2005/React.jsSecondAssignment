// src/components/Navbar.js
import React from "react";
import Logo from "../../Assets/NavBar/Logo.png";
import SignIn from "../../Assets/NavBar/SignIn.png";
import Menu from "../../Assets/NavBar/Menu.png";

export default function Navbar() {
  return (
    <nav className="bg-[#2B2B2B] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="text-white font-bold text-xl">
            <a href="..." className="flex cursor-pointer">
              <img src={Logo} alt="..." className="" />
              <p className="text-white font-black font-mono">NFT Marketplace</p>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="..." className="text-white">
            Marketplace
            </a>
            <a href="..." className="text-white">
            Rankings
            </a>
            <a href="..." className="text-white">
            Connect a wallet
            </a>
            <a href="..." className="text-white mx-2">
              <button className="flex bg-[#A259FF] rounded-xl py-2 px-4 my-[-5px]">
                <img src={SignIn} alt="" />
                <p className="text-white font-mono">Sign Up</p>
              </button>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <img src={Menu} alt="" className="w-7" />
          </div>
        </div>
      </div>
    </nav>
  );
}
