import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button onClick={() => window.open("https://www.linkedin.com/in/navnitsingh145/", "_blank")} className="px-4 py-2 rounded-full text-xl font-bold text-white border-none flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-orange-400 hover:scale-110 transition-all duration-500">
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
}

export default NavbarBtn;
