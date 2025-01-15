import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M130.537 0a26.002 26.002 0 0118.395 7.598l43.372 43.285a26.004 26.004 0 017.634 18.379l.062 61.275a26 26 0 01-7.598 18.395l-43.285 43.372a26.002 26.002 0 01-18.379 7.634L69.463 200a26.001 26.001 0 01-18.395-7.598L7.696 149.117a26 26 0 01-7.634-18.379L0 69.463a26.003 26.003 0 017.598-18.395L50.883 7.696A26.003 26.003 0 0169.262.062L130.537 0z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="143.611"
        cy="184.18"
        fill="#FF58E4"
        rx="114.679"
        ry="58.126"
        transform="rotate(-33.875 143.611 184.18)"></ellipse>
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
const Component = createShapeComponent("polygon-3", data);
export { data, Component as default };
