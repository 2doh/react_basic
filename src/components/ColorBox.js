import React from "react";
import { ColorContext } from "../contexts/colorContext";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{ width: "200px", height: "200px", background: value.color }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};
export default ColorBox;
