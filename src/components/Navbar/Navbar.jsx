import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo1 from "../../assets/Frame 3.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="nav-bar">
      <div className="">
        <div className="app ">
          <div className="nav-flex">
            <div className="first-flex">
              <div className="logoFlex1">
                <img className="logo-img" src={logo1} alt="" />
                <span>Aplha furniture</span>
              </div>
            </div>
            {/* search bar and order */}
            <div className="second-flex">
              <div className="search-flex">
                <input
                  type="text"
                  placeholder="search"
                  className="input-class"
                />
                <IoMdSearch className="search-icon" />
              </div>
              {/* order button */}
              <div className="help-flex">
                <FaRegQuestionCircle size={20} />
                <span className="help-span">
                  Help <IoIosArrowDown className="arrow" />
                </span>
              </div>
              {/* darkmode Switch */}
            </div>
            <div className={mobileMenu ? "color2 third-flex" : "third-flex"}>
              <CiHeart className="media-none" />
              <Link to="/cart">
                <FaCartShopping className="cart-shop" />
              </Link>
              <CiUser />
              <IoMenuOutline className="media-on" onClick={toggleMenu} />
            </div>
          </div>

          {/* lower Navbar */}
        </div>
        <ul className={mobileMenu ? "mobile-view" : "hide-mobile-menu"}>
          <li>Home</li>
          <li>Shop</li>
          <li>About us</li>
          <li>Furniture</li>
          <li>Contact us</li>
          <li>Sign in</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
