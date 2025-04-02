import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient41 from "../../gradients/gradient-41";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M100 150c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50zm0 50c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
      clipRule="evenodd"
    />
  ),
  fillOpacity: 0.33,
  fill: "#FAFF02",
  gradient: Gradient41,
};
const Component = createShapeComponent("ellipse-12", data);
export { data, Component as default };
