import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M56.359 100C22.997 83.793 0 49.582 0 10h50c0 27.614 22.386 50 50 50s50-22.386 50-50h50c0 39.582-22.997 73.793-56.359 90C177.003 116.207 200 150.418 200 190h-50c0-27.614-22.386-50-50-50s-50 22.386-50 50H0c0-39.582 22.997-73.793 56.359-90z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="106" cy="22.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
      <ellipse cx="64.5" cy="155" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#06F" d="M218 126H100v120h118V126z"></path>
    </>
  ),
  opacity: 0.44,
  fill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("moon-15", data);
export { data, Component as default };
