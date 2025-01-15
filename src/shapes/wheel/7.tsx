import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M85.087 196v-80.513L9.223 140.369 0 111.717l75.86-24.881L28.98 21.7 53.114 4 100 69.14 146.886 4l24.135 17.7-46.882 65.136L200 111.717l-9.223 28.652-75.864-24.882V196H85.087z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M150 56H-15v129h165V56z"></path>
      <ellipse
        cx="107.987"
        cy="146.246"
        fill="#FF58E4"
        rx="79.158"
        ry="47.123"
        transform="rotate(-33.875 107.987 146.246)"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#06F",
  gradient: [],
};
const Component = createShapeComponent("wheel-7", data);
export { data, Component as default };
