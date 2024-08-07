import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo1 from "../../assets/Frame 3.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import toast from "react-hot-toast";

const Navbar = ({ showLogin, setShowLogin }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { token, setToken } = useContext(StoreContext);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    toast.success("Logout Successfully");
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    if (mobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  const handleSignInClick = () => {
    setShowLogin(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav-bar" ref={menuRef}>
      <div className="">
        <div className="app ">
          <div className="nav-flex">
            <div className="first-flex">
              <Link to="/">
                <div className="logoFlex1">
                  <img className="logo-img" src={logo1} alt="" />
                  <span>Aplha furniture</span>
                </div>
              </Link>
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
              {/* <CiHeart className="media-none" /> */}
              <Link to="/cart">
                <FaCartShopping className="cart-shop" />
              </Link>
              {token ? <CiUser /> : <></>}
              {!token ? (
                <div>
                  <button className="btn-signin" onClick={handleSignInClick}>
                    Sign in
                  </button>
                </div>
              ) : (
                <button className="btn-signin" onClick={Logout}>
                  Logout
                </button>
              )}

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
