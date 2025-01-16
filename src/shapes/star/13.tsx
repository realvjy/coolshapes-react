import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M2.178 12.427C.158 5.905-.85 2.644.897.897 2.644-.85 5.905.159 12.427 2.177l50.984 15.781a24.58 24.58 0 0116.213 16.213L100 100 34.17 79.624a24.58 24.58 0 01-16.213-16.213L2.178 12.427z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="100" cy="10.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
      <ellipse cx="57.5" cy="160" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#06F" d="M211 131H93v120h118V131z"></path>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("star-13", data);
export { data, Component as default };
