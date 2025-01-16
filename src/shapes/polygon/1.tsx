import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M196.516 87.01a25.96 25.96 0 010 25.98l-36.997 64.02A26.012 26.012 0 01136.997 190H63.003a26.011 26.011 0 01-22.522-12.99L3.484 112.99a25.958 25.958 0 010-25.98l36.997-64.02A26.01 26.01 0 0163.003 10h73.994a26.011 26.011 0 0122.522 12.99l36.997 64.02z",
  blur: 27.5,
  gradientShapes: (
    <>
      <path fill="#FF4921" d="M161 0H40v113h121V0z"></path>
      <path fill="#FF58E4" d="M200 44H87v113h113V44z"></path>
      <path fill="#0CE548" fillOpacity="0.35" d="M196 91H82v102h114V91z"></path>
      <path fill="#FFE500" fillOpacity="0.74" d="M129 59H27v120h102V59z"></path>
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
const Component = createShapeComponent("polygon-1", data);
export { data, Component as default };
