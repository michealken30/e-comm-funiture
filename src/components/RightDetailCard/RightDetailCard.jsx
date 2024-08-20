import React from "react";
import "./RightDetailCard.css";
import { CiLineHeight } from "react-icons/ci";
import { TbSquareLetterWFilled } from "react-icons/tb";
import { MdOutlineBlock } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RightDetailCard = ({ item }) => {
  console.log(item);
  console.log(item.name);
  return (
    <div className="right-section">
      <div className="right-card">
        <div className="name-div">
          <span>{item.name}</span>
          <span>
            <CiHeart />
          </span>
        </div>
        <div className="name-div ">
          <span className="name-font">{item.short}</span>
          <span>
            <IoShareSocialOutline />
          </span>
        </div>
        <button className="button-brown">Brown</button>
        <span className="r-price">
          <div className="old-price">
            <span>$</span>
            <span>
              <del>{item.newPrice}</del>
            </span>
          </div>

          <div>
            <span>$</span>

            <span>{item.oldPrice}</span>
          </div>
        </span>
        <div className="review">
          <div className="review-icon">
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
            <span>
              <IoIosStarOutline />
            </span>
          </div>
          <div>
            <span>{item.review}</span>
          </div>
        </div>
        <div className="nature-review">
          <span>
            <CiLineHeight />
          </span>

          <span>{item.natue}</span>
        </div>
        <div className="iswash-review">
          <span>
            <MdOutlineBlock />
          </span>
          <span>{item.iswash}</span>
        </div>
        <div className="waranty-review">
          <span>
            <TbSquareLetterWFilled />
          </span>
          <span>{item.warranty}</span>
        </div>
        <Link to="/cart">
          <button className="add-to-cart">
            <span>
              <FaCartShopping className="" />
            </span>

            <span>Add to Cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightDetailCard;
