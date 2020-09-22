import React from "react";
import "./act-select.style.scss";

const ActSelect = (props) => {
  return (
    <ul className="test">
      <li className="list-styles">{props.act}</li>
    </ul>
  );
};

export default ActSelect;
