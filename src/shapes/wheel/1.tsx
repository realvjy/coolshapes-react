import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M117 0H83l12.468 89.06L41.31 17.269 17.268 41.31 89.06 95.468 0 83v34l89.06-12.468-71.791 54.158 24.041 24.042 54.158-71.792L83 200h34l-12.468-89.06 54.158 71.792 24.041-24.042-71.791-54.158L200 117V83l-89.06 12.468 71.792-54.158-24.042-24.042-54.158 71.792L117 0z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#8F5BFF" d="M231 114H9v116h222V114z"></path>
      <ellipse
        cx="53.016"
        cy="0.222"
        fill="#00F0FF"
        rx="111.935"
        ry="76.871"
        transform="rotate(-15 53.016 .222)"></ellipse>
    </>
  ),

  gradient: [],
};
const Component = createShapeComponent("wheel-1", data);
export { data, Component as default };
