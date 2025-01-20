import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M149.999 50c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zM149.999 150c0 27.615-22.386 50-50 50s-50-22.385-50-50c0-27.614 22.386-50 50-50s50 22.386 50 50z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#8F5BFF" d="M211 127H-11v116h222V127z"></path>
      <ellipse cx="88" cy="23.5" fill="#00F0FF" rx="112" ry="45.5"></ellipse>
    </>
  ),

  fill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("ellipse-4", data);
export { data, Component as default };
