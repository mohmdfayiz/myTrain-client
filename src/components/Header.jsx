import React from "react";
import Logo from '../assets/rail.png'

const Header = () => {
  return (
    <div className="bg-darkBlue">
      <div className="flex gap-2 p-5 mx-auto container max-w-7xl px-6">
        <img src={Logo} alt="logo" className="h-10 w-10 object-cover" />
        <h1 className="font-bold text-2xl text-indigo">MyTrain</h1>
      </div>
    </div>
  );
};

export default Header;
