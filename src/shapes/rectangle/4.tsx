import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M200.001 100L100 0 0 100l100 100.001L200.001 100zM140 64a4 4 0 00-4-4H64a4 4 0 00-4 4v72a4 4 0 004 4h72a4 4 0 004-4V64z"
      clipRule="evenodd"
    />
  ),
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#06F" d="M189 120H41v120h148V120z"></path>
      <ellipse cx="56" cy="92" fill="#07FFE1" rx="84" ry="56"></ellipse>
      <ellipse
        cx="112"
        cy="32.5"
        fill="#FF00D6"
        fillOpacity="0.7"
        rx="88"
        ry="49.5"></ellipse>
    </>
  ),
  opacity: 0.23,
  fill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("rectangle-4", data);
export { data, Component as default };
