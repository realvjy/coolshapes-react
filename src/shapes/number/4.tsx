import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100 160H10V90l90-90h90v200h-90v-40z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="89.5" cy="30.5" fill="#FF00D6" rx="65.5" ry="51.5"></ellipse>
      <ellipse
        cx="26.5"
        cy="149.5"
        fill="#07FFE1"
        rx="73.5"
        ry="85.5"></ellipse>
      <path fill="#06F" d="M211 119H93v132h118V119z"></path>
    </>
  ),
  opacity: 0.54,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("number-4", data);
export { data, Component as default };
