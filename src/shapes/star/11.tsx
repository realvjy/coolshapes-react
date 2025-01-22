import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M100 0c7.13 31.563 43.35 46.567 70.711 29.29C153.433 56.65 168.437 92.87 200 100c-31.563 7.13-46.567 43.35-29.289 70.711C143.35 153.433 107.13 168.437 100 200c-7.13-31.563-43.35-46.567-70.71-29.289C46.566 143.35 31.562 107.13 0 100c31.563-7.13 46.567-43.35 29.29-70.71C56.65 46.566 92.87 31.562 100 0z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M115 9H-28v131h143V9z"></path>
      <path fill="#FF58E4" d="M190 100H0v116h190V100z"></path>
    </>
  ),

  gradient: [
    {
      x1: "200",
      x2: "0",
      y1: "0",
      y2: "200",
      type: "linear",
      opacity: "0.55",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FFD600", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("star-11", data);
export { data, Component as default };
