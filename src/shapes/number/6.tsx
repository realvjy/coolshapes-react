import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M10 90c0-49.706 40.294-90 90-90v90h35c30.376 0 55 24.624 55 55s-24.624 55-55 55h-35c-49.706 0-90-40.294-90-90V90z",
  blur: 27.5,
  gradientShapes: (
    <>
      <path fill="#0CE548" fillOpacity="0.35" d="M196 91H82v102h114V91z"></path>
      <path fill="#FFE500" fillOpacity="0.74" d="M100 92H15v120h85V92z"></path>
      <path fill="#FF58E4" d="M136 29H75v113h61V29z"></path>
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
const Component = createShapeComponent("number-6", data);
export { data, Component as default };
