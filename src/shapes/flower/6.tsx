import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M124.486 75.514C167.877 77.436 200 84.874 200 100c0 15.126-32.123 22.564-75.514 24.486C122.564 167.877 115.126 200 100 200c-15.126 0-22.564-32.123-24.486-75.514C32.123 122.564 0 115.126 0 100c0-15.126 32.123-22.564 75.514-24.486C77.436 32.123 84.874 0 100 0c15.126 0 22.564 32.123 24.486 75.514z",
  blur: 35,
  gradientShapes: (
    <>
      <ellipse
        cx="141.365"
        cy="59.898"
        fill="#FFD749"
        rx="57.325"
        ry="57"
        transform="rotate(-33.875 141.365 59.898)"></ellipse>
      <path fill="#FF58E4" d="M179 36H79v76h100V36z"></path>
    </>
  ),

  fill: "#07FFE1",
  gradient: [
    {
      x1: "38",
      x2: "119",
      y1: "14.5",
      y2: "181.5",
      type: "linear",
      stops: [
        { color: "#FFE500", offset: 0 },
        { color: "#07FFE1", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("flower-6", data);
export { data, Component as default };
