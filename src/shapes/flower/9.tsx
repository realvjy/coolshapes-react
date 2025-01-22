import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z",
  blur: 35,
  gradientShapes: (
    <>
      <path fill="#06F" d="M214 0H92v132.75h122V0z"></path>
      <path fill="#FF58E4" d="M121 62H0v114h121V62z"></path>
    </>
  ),

  gradient: [
    {
      x1: "162",
      x2: "49.5",
      y1: "38",
      y2: "150.5",
      type: "linear",
      opacity: 0.55,
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FF58E4", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("flower-9", data);
export { data, Component as default };
