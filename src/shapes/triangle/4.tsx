import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M0 0a99.977 99.977 0 0029.273 70.71 100.027 100.027 0 0070.71 29.306V0H0zm99.984 100.016H200V0a100.028 100.028 0 00-70.735 29.292 99.976 99.976 0 00-29.281 70.724zm0 0V200H200a99.957 99.957 0 00-29.293-70.703 100.02 100.02 0 00-70.723-29.281zm0 0H0V200a100.017 100.017 0 0070.703-29.292 99.963 99.963 0 0029.28-70.692z",
  blur: 35,
  gradientShapes: (
    <>
      <ellipse
        cx="162.682"
        cy="0.587"
        fill="#FFD749"
        rx="83"
        ry="57"
        transform="rotate(-33.875 162.682 .587)"></ellipse>
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
const Component = createShapeComponent("triangle-4", data);
export { data, Component as default };
