import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#8F5BFF" d="M222 89H0v111h222V89z"></path>
    </>
  ),

  fill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("star-6", data);
export { data, Component as default };
