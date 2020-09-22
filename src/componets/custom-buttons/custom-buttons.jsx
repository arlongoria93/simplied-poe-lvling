import React from "react";
import Button from "@material-ui/core/Button";

import "./custom-buttons.scss";

const CustomBtn = (props) => {
  return (
    <div className="test2">
      <Button
        variant="contained"
        size="small"
        onClick={props.clicks}
        className="test"
      >
        {props.actName}
      </Button>
    </div>
  );
};

export default CustomBtn;
