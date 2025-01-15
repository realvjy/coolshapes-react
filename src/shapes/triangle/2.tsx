import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M50.94 0L0 200h100L50.94 0zM100 200h100L150.967 0 100 200z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
      <path fill="#FF58E4" d="M212-20H111v133h101V-20z"></path>
      <path
        fill="#FFE500"
        fillOpacity="0.74"
        d="M51 100h-85v120h85V100z"></path>
    </>
  ),

  gradient: [
    {
      x1: "210",
      x2: "52.5",
      y1: "194.5",
      y2: "0",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("triangle-2", data);
export { data, Component as default };
