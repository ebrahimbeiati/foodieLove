import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { BiRestaurant, BiChevronDown, BiChevronUp } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => {
    setMenu(!menu);
    setActiveMenu("");
  };

  const handleMenuToggle = () => {
    setActiveMenu(activeMenu === "menu" ? "" : "menu");
  };

  const closeMenu = () => {
    setMenu(false);
    setActiveMenu("");
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_4px_8px_10_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] items-center w-full h-full">
        <Link to="/">
          <div className="flex flex-row items-center cursor-pointer">
            <BiRestaurant size={32} />
            <h1 className="text-2xl font-semibold ml-2">FoodieLove</h1>
          </div>
        </Link>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="/"
            className="hover:text-amber-600 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-600 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <div className="relative">
            <button
              onClick={handleMenuToggle}
              className="flex items-center hover:text-amber-600 transition-all cursor-pointer focus:outline-none"
            >
              Menu
              {activeMenu === "menu" ? (
                <BiChevronUp className="ml-1" />
              ) : (
                <BiChevronDown className="ml-1" />
              )}
            </button>
            {activeMenu === "menu" && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-48">
                <Link
                  to="/food"
                  className="block hover:text-gray-900 cursor-pointer"
                  onClick={closeMenu}
                >
                  Food
                </Link>
                <Link
                  to="/drink"
                  className="block hover:text-gray-900 cursor-pointer mt-2"
                  onClick={closeMenu}
                >
                  Drink
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/review"
            className="hover:text-amber-600 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Review
          </Link>
          <Link
            to="/order"
            className="hover:text-amber-600 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Order
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-600 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={toggleMenu} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={toggleMenu} />
          )}
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-500`}
      >
        <Link
          to="/"
          className="hover:text-amber-600 transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-amber-600 transition-all cursor-pointer"
          onClick={closeMenu}
        >
          About
        </Link>
        <div className="relative">
          <button
            onClick={handleMenuToggle}
            className="hover:text-amber-600 transition-all cursor-pointer focus:outline-none"
          >
            Menu
            {activeMenu === "menu" ? (
              <AiOutlineClose />
            ) : (
              <AiOutlineMenuUnfold />
            )}
          </button>
          {activeMenu === "menu" && (
            <div className="absolute bg-white shadow-lg rounded-lg p-4 w-full">
              <Link
                to="/food"
                className="block text-gray-900 cursor-pointer hover:text-amber-600 transition-all"
                onClick={() => setActiveMenu("")}
              >
                Food
              </Link>
              <Link
                to="/drink"
                className="flex flex-col text-gray-900 cursor-pointer mt-2 hover:text-amber-600 transition-all"
                onClick={() => setActiveMenu("")}
              >
                Drink
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/review"
          className="hover:text-amber-600 transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Review
        </Link>
        <Link
          to="/order"
          className="hover:text-amber-600 transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Order
        </Link>
        <Link
          to="/contact"
          className="hover:text-amber-600 transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
