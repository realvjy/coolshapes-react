import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M0 0c0 55.228 44.772 100 100 100C44.772 100 0 144.772 0 200c55.228 0 100-44.772 100-100 0 55.228 44.772 100 100 100 0-55.22-44.758-99.987-99.976-100C155.242 99.987 200 55.22 200 0c-55.228 0-100 44.772-100 100C100 44.772 55.228 0 0 0z",
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
const Component = createShapeComponent("moon-13", data);
export { data, Component as default };
