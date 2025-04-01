import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M200.001 100L100 0 0 100l100 100.001L200.001 100zM140 64a4 4 0 00-4-4H64a4 4 0 00-4 4v72a4 4 0 004 4h72a4 4 0 004-4V64z"
      clipRule="evenodd"
    />
  ),
  fillOpacity: 0.23,
  fill: "#FFF500",
  gradient: "gradient-100",
};
const Component = createShapeComponent("rectangle-4", data);
export { data, Component as default };
