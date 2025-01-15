import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M128 28L100 0 72 28l28 28 28-28zM56 100L28 72 0 100l28 28 28-28z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
      <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
      <ellipse
        cx="153.682"
        cy="64.587"
        fill="#FFD749"
        rx="83"
        ry="57"
        transform="rotate(-33.875 153.682 64.587)"></ellipse>
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
const Component = createShapeComponent("rectangle-7", data);
export { data, Component as default };
