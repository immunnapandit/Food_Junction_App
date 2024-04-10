import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/footerlogo.png";
import Facebook from "../assets/facebook icon.png";
import Instagram from "../assets/insta.png";
import Twitter from "../assets/twitter icon.png";

export const Footer = () => {
  return (
    <footer className="footer bg-[#FC8019] py-10 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-8 lg:gap-44 lg:px-6">
        {/* Logo */}
        <Link to="/">
          <img src={FooterLogo} alt="Footer Logo" className="w-24" />
        </Link>
        {/* Links */}
        <ul className="text-white flex flex-col lg:flex-row gap-6 lg:gap-12 font-normal text-xs">
          <Link to="/about">
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link to="/faq">
            <li className="cursor-pointer">FAQ</li>
          </Link>
          <a
            href="https://github.com/immunnapandit"
            target="_blank"
            rel="noreferrer"
          >
            <li className="cursor-pointer">Developer's Profile</li>
          </a>
          <li className="cursor-pointer">Help & Support</li>
          <li className="cursor-pointer">T & C</li>
        </ul>
        <div className="flex gap-6">
          {/* Social Icons */}
          <img src={Facebook} alt="Fb Logo" className="w-5" />
          <img src={Instagram} alt="Insta Logo" className="w-5" />
          <img src={Twitter} alt="Twitter Logo" className="w-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
