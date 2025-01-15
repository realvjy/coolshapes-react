import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M10 0v70h25v60H10v70h125c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C180.766 90.046 190 73.602 190 55c0-30.376-24.624-55-55-55H10z",
  blur: 35,
  gradientShapes: (
    <>
      <ellipse
        cx="145.429"
        cy="29.977"
        fill="#FFD749"
        rx="54.993"
        ry="57"
        transform="rotate(-33.875 145.429 29.977)"></ellipse>
      <ellipse cx="92" cy="214.5" fill="#06F" rx="86" ry="42.5"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#07FFE1",
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
const Component = createShapeComponent("number-3", data);
export { data, Component as default };
