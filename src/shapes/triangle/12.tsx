import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M0 0l66.445 200H0V0zM66.777 0l66.446 200H66.777V0zM200 200L133.555 0v200H200z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M162 76H-7v150h169V76z"></path>
      <ellipse
        cx="108.777"
        cy="175.536"
        fill="#FF58E4"
        rx="91.994"
        ry="58.126"
        transform="rotate(-33.875 108.777 175.536)"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#06F",
  gradient: [],
};
const Component = createShapeComponent("triangle-12", data);
export { data, Component as default };
