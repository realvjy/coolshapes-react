import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M100 0c12.424 62.382 37.256 87.456 100 100-62.759 12.544-87.591 37.618-100 100-12.424-62.382-37.256-87.471-100-100C62.758 87.456 87.591 62.382 100 0z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#06F" d="M213 69H93v141h120V69z"></path>
    </>
  ),

  gradient: [
    {
      x1: "162",
      x2: "49.5",
      y1: "38",
      y2: "150.5",
      type: "linear",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FF58E4", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("star-8", data);
export { data, Component as default };
