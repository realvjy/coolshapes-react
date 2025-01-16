import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100 5l100 72.573L161.803 195H38.197L0 77.573 100 5z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#00F0FF" d="M158 113H11v90h147v-90z"></path>
      <path fill="#18A0FB" d="M123 72H-20v108h143V72z"></path>
      <ellipse
        cx="62.382"
        cy="69.794"
        fill="#FFD749"
        rx="60.387"
        ry="39.91"
        transform="rotate(-33.875 62.382 69.794)"></ellipse>
    </>
  ),

  gradient: [
    {
      x1: "200",
      x2: "0",
      y1: "0",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FFD600", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("polygon-6", data);
export { data, Component as default };
