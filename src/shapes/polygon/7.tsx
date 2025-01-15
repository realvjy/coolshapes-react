import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M86.449 3.601a27.296 27.296 0 0127.102 0l63.805 36.514C185.796 44.945 191 53.9 191 63.594v72.812c0 9.694-5.204 18.649-13.644 23.479l-63.805 36.514a27.3 27.3 0 01-27.102 0l-63.805-36.514C14.204 155.055 9 146.1 9 136.406V63.594c0-9.694 5.204-18.649 13.644-23.48L86.45 3.602z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#8F5BFF" d="M209 126H-9v108h218V126z"></path>
      <ellipse cx="87" cy="57.5" fill="#00F0FF" rx="59" ry="34.5"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("polygon-7", data);
export { data, Component as default };
