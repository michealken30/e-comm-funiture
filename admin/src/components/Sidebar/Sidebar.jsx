import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setSelectedProduct }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink
          to="/add"
          className="sidebar-option"
          onClick={() => setSelectedProduct(null)}
        >
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/order" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Order Item</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
