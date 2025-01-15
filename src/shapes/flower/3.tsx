import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M200 50c0-27.614-22.386-50-50-50s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50z",
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
const Component = createShapeComponent("flower-3", data);
export { data, Component as default };
