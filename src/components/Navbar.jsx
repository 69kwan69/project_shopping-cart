import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div
      id="navbar"
      className="fixed left-0 top-0 z-10 w-full border bg-white p-6 sm:flex sm:justify-between lg:px-36"
    >
      <Link to={"home"}>
        <img src={logo} alt="logo" />
      </Link>

      <button
        className="absolute right-6 top-6 scale-125 sm:hidden"
        onClick={toggleMenu}
      >
        <span className="material-symbols-outlined">
          {openMenu ? "close" : "menu"}
        </span>
      </button>

      <nav
        className={`absolute left-0 top-full z-10 h-dvh w-full bg-inherit p-6 duration-100 sm:static sm:block sm:h-auto sm:w-auto sm:p-0 ${openMenu ? "" : "hidden"}`}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-10">
          <li className="p-6 text-center text-2xl uppercase decoration-2 hover:underline focus-visible:underline sm:p-0 sm:text-xl sm:font-semibold sm:normal-case">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/explore"
              onClick={closeMenu}
            >
              Explore
            </NavLink>
          </li>
          <li className="p-6 text-center text-2xl uppercase decoration-2 hover:underline focus-visible:underline sm:p-0 sm:text-xl sm:font-semibold sm:normal-case">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/cart"
              onClick={closeMenu}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
