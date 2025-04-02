import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient104 from "../../gradients/gradient-104";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M150 50H50v100h100V50zM0 0v200h200V0H0z"
      clipRule="evenodd"
    />
  ),

  fill: "#fff",
  gradient: Gradient104,
};
const Component = createShapeComponent("rectangle-8", data);
export { data, Component as default };
