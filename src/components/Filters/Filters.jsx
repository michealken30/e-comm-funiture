import React from "react";
import "./Filter.css";

const Filters = ({ data, title }) => {
  return (
    <div className="">
      <div class="">
        <p class="pdt-class">{title}</p>
      </div>
      <div className="check-column">
        {data.map((color, i) => (
          <div className="sale-box4" key={i}>
            <input class="sale-box" type="checkbox" />
            <span>{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
