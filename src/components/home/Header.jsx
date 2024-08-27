import React, { useState } from "react";
import logo from "../../assets/logo (1).png";
import icon1 from "../../assets/001-loupe.png";
import icon2 from "../../assets/002-user.png";
import icon3 from "../../assets/003-shopping-bag.png";
import icon4 from "../../assets/004-heart.png";
import icon5 from "../../assets/nav_icon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <nav className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4 lg:px-12">
        <div className="flex items-center">
          <a className="px-3" href="/">
            <img src={logo} loading="lazy" alt="Logo" width="86" height="51" />
          </a>
        </div>
        {/* Main navigation for larger screens */}
        <div className="hidden md:block">
          <ul className="md:flex items-center justify-center gap-6">
            <li className="font-dm text-sm font-medium text-slate-700">
              <a href="#">HOME</a>
            </li>
            <li className="font-dm text-sm font-medium text-slate-700">
              <a href="#">SHOP</a>
            </li>
            <li className="font-dm text-sm font-medium text-slate-700">
              <a href="#">COLLECTION</a>
            </li>
            <li className="font-dm text-sm font-medium text-slate-700">
              <a href="#">JOURNAL</a>
            </li>
            <li className="font-dm text-sm font-medium text-slate-700">
              <a href="#">LOOKBOOK</a>
            </li>
            <li className="font-dm text-sm font-medium text-slate-700">
              <a href="#">PAGES</a>
            </li>
          </ul>
        </div>

        <div className="flex-grow"></div>

        {/* Icons for larger screens */}
        <div className="hidden md:flex items-center gap-6">
          <img
            className="h-5 w-5 text-slate-700"
            src={icon1}
            alt="Search Icon"
          />
          <img className="h-5 w-5 text-slate-700" src={icon2} alt="User Icon" />
          <img
            className="h-5 w-5 text-slate-700"
            src={icon3}
            alt="Shopping Bag Icon"
          />
          <img
            className="h-5 w-5 text-slate-700"
            src={icon4}
            alt="Heart Icon"
          />
          <img className="h-5 w-5 text-slate-700" src={icon5} alt="Menu Icon" />
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden flex items-center">
          <button type="button" onClick={toggleMenu}>
            <svg
              xmlns={icon5}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Dropdown menu for smaller screens */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden px-6 transition-all duration-200 ease-in-out`}
      >
        <ul className="flex flex-col gap-4">
          <li className="font-dm text-sm font-medium text-slate-700">
            <a href="#">HOME</a>
          </li>
          <li className="font-dm text-sm font-medium text-slate-700">
            <a href="#">SHOP</a>
          </li>
          <li className="font-dm text-sm font-medium text-slate-700">
            <a href="#">COLLECTION</a>
          </li>
          <li className="font-dm text-sm font-medium text-slate-700">
            <a href="#">JOURNAL</a>
          </li>
          <li className="font-dm text-sm font-medium text-slate-700">
            <a href="#">LOOKBOOK</a>
          </li>
          <li className="font-dm text-sm font-medium text-slate-700">
            <a href="#">PAGES</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
