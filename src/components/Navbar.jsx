import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_4px_8px_10_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] items-center w-full h-full">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-2xl font-semibold ml-2">FoodieLove</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" hover:text-amber-600 transition-all  cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" hover:text-amber-600 transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" hover:text-amber-600 transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" hover:text-amber-600 transition-all cursor-pointer"
            >
              Review
            </Link>
            <Link
              to="order"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" hover:text-amber-600 transition-all cursor-pointer"
            >
              Order
            </Link>
            <Button title="Contact" />
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black  text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-500`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className=" hover:text-amber-600 transition-all  cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className=" hover:text-amber-600 transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className=" hover:text-amber-600 transition-all cursor-pointer"
        >
          Menu
        </Link>
        <Link
          to="review"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className=" hover:text-amber-600 transition-all cursor-pointer"
        >
          Review
        </Link>
        <Link
          to="order"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className=" hover:text-amber-600 transition-all cursor-pointer"
        >
          Order
        </Link>
        <Button title="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
