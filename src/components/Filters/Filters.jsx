import React from "react";
import "./Filter.css";

const Filters = ({ data, title, onFilterChange }) => {
  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    onFilterChange(checked ? value : null);
  };

  return (
    <div className="">
      <div className="">
        <p className="pdt-class">{title}</p>
      </div>
      <div className="check-column">
        {data.map((item, i) => (
          <div className="sale-box4" key={i}>
            <input
              className="sale-box"
              type="checkbox"
              value={item}
              onChange={handleCheckboxChange}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
