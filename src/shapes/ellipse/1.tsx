import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M0 100C0 44.772 44.772 0 100 0s100 44.772 100 100-44.772 100-100 100S0 155.228 0 100z",
  blur: 27.5,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
      <path fill="#0CE548" fillOpacity="0.35" d="M196 91H82v102h114V91z"></path>
      <path fill="#FFE500" fillOpacity="0.74" d="M113 80H28v120h85V80z"></path>
    </>
  ),

  gradient: [
    {
      x1: "186.5",
      x2: "37",
      y1: "37",
      y2: "186.5",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0, opacity: "0.51" },
        { color: "#00F0FF", offset: "1", opacity: "0.59" },
      ],
    },
  ],
};
const Component = createShapeComponent("ellipse-1", data);
export { data, Component as default };
