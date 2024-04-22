"use client";
import logo from "@/assets/logo/mainLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Properties", link: "/properties" },
    { id: 4, text: "Contact", link: "/contact" },
    { id: 5, text: "Add property", link: "/dashboard" },
  ];

  return (
    <header className=" h-14 py-12">
      <div className=" z-10 h-full w-full max-w-[1300px] px-[15px] mx-auto flex justify-between items-center sticky top-0">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-blue-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F3F9FB] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <Image src={logo} alt="logo" width={100} height={50} />

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl px-4 py-2 hover:bg-blue-400 duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
