import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M100 72c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zM0 100C0 44.772 44.772 0 100 0s100 44.772 100 100-44.772 100-100 100S0 155.228 0 100z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path
        fill="#FFE500"
        fillOpacity="0.74"
        d="M117 77H-22v130h139V77z"></path>
      <path fill="#EE46D3" d="M174-60H-17V78h191V-60z"></path>
      <ellipse
        cx="107.531"
        cy="168.75"
        fill="#00F0FF"
        rx="69.531"
        ry="47.75"></ellipse>
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
const Component = createShapeComponent("ellipse-2", data);
export { data, Component as default };
