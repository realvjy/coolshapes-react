import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 0v200L0 0h200zM100 100v100L0 100h100z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#8F5BFF" d="M243.892 107.197h-222v116h222v-116z"></path>
      <ellipse
        cx="68.935"
        cy="-27.395"
        fill="#00F0FF"
        rx="111.935"
        ry="63.605"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("triangle-6", data);
export { data, Component as default };
