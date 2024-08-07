import React from "react";
//import link
import { Link, NavLink } from "react-router-dom";
//import logo
import Logo from "../assets/img/logo.svg";
import { hover } from "@testing-library/user-event/dist/hover";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <NavLink to={"/"}>
          <img src={Logo} alt="" />
        </NavLink>
        {/*button*/}
        <div className="flex items-center gap-6">
          <NavLink className="hover:text-violet-900 transition" to={""}>
            Log in
          </NavLink>
          <NavLink
            className={
              "bg-violet-700 hover:text-violet-800 text-white px-4 py-3 rounded-lg transition"
            }
            to={""}
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
