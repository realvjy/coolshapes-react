import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M141.304 0l58.613 58.495.083 82.809-58.495 58.613-82.809.083L.083 141.505 0 58.696 58.495.083 141.304 0z",
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
const Component = createShapeComponent("polygon-4", data);
export { data, Component as default };
