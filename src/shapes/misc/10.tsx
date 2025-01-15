import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M136 0l-36 36L64 0H0v64l36 36-36 36v64h64l36-36 36 36h64v-64l-36-36 36-36V0h-64z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="30.742"
        cy="164.544"
        fill="#FFC700"
        rx="79.5"
        ry="64.116"
        transform="rotate(-33.875 30.742 164.544)"></ellipse>
      <path
        fill="url(#paint0_linear_748_4989)"
        d="M220-35H109V86h111V-35z"></path>
      <path fill="#FF37BB" d="M256 122H122v121h134V122z"></path>
    </>
  ),
  opacity: 0.19,
  shapeFill: "#FF6C02",
  gradient: [
    {
      x1: "196.967",
      x2: "112.334",
      y1: "-27.438",
      y2: "62.212",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("misc-10", data);
export { data, Component as default };
