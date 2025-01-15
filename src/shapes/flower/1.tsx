import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z",
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
const Component = createShapeComponent("flower-1", data);
export { data, Component as default };
