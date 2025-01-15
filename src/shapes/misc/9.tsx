import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M8.475 78.884C27.008 22.9 70.833 4.108 89.905 1.464c110.239-15.283 132.313 92.87 90.046 148.772-36.448 48.204-100.638 57.186-139.16 44.676C6.86 183.894-11.983 140.686 8.475 78.884z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="143.777"
        cy="167.536"
        fill="#FF58E4"
        rx="91.994"
        ry="58.126"
        transform="rotate(-33.875 143.777 167.536)"></ellipse>
      <ellipse
        cx="68.482"
        cy="38.587"
        fill="#00F0FF"
        rx="69.531"
        ry="47.75"
        transform="rotate(-26.262 68.482 38.587)"></ellipse>
    </>
  ),

  gradient: [
    {
      x1: "158.5",
      x2: "29",
      y1: "12.5",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("misc-9", data);
export { data, Component as default };
