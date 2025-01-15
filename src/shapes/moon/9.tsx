import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M100 200a100.001 100.001 0 000-200v200zM0 200a100.002 100.002 0 00100-100A100 100 0 000 0v200z",
  blur: 35,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M180-41H-11v141h191V-41z"></path>
      <path fill="#18A0FB" d="M256 63H113v157h143V63z"></path>
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
const Component = createShapeComponent("moon-9", data);
export { data, Component as default };
