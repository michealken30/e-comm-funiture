import React from "react";
import "./LeftDetailCard.css";


// import image from "../../assets/Image.png";

const LeftDetailCard = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((item, i) => (
          <div key={i}>
            <img className="full-width" src={item.image} alt="" />
          </div>
        ))}

        <div className="img-flex">
          <img src="/Image6.png" alt="" />
          <img src="/Image6.png" alt="" />
          <img src="/Image6.png" alt="" />
          <img src="/Image6.png" alt="" />
          <img src="/Image6.png" alt="" />
        </div>
        <p className="details">
          The LuxeComfort Sectional Sofa blends modern elegance with superior
          comfort, featuring premium velvet upholstery and a solid hardwood
          frame. With high-density foam cushions and a reversible chaise, it
          offers versatile seating for 5-6 people. Available in multiple colors,
          it includes built-in USB charging ports and a hidden storage
          compartment. Price: $2,499 (inclusive of all taxes).
        </p>
        <p className="details">Delivery and assembly prices not included.</p>
        <p className="details">Article number</p>
        <button className="btn">#123456789</button>
      </div>
    </div>
  );
};

export default LeftDetailCard;
