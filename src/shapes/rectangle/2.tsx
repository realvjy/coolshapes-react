import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: <rect width="200" height="200" fill="#fff" rx="32" />,
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M196 148H0v104h196V148z"></path>
      <ellipse
        cx="125.54"
        cy="65.794"
        fill="#00C5DF"
        rx="89.568"
        ry="61.511"
        transform="rotate(-26.262 125.54 65.794)"></ellipse>
    </>
  ),

  fill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("rectangle-2", data);
export { data, Component as default };
