import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M10 90h90v110h90V0h-90L10 90z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="106" cy="22.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
      <ellipse cx="64.5" cy="155" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#06F" d="M218 126H100v120h118V126z"></path>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("number-1", data);
export { data, Component as default };
