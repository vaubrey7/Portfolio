import React from "react";
import logo from "../../Assets/Images/logo_1.png";

export default function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img
        className="block h-8 w-auto lg:hidden"
        src={logo}
        alt="jrs"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src={logo}
        alt="jrs"
      />
    </div>
  );
}