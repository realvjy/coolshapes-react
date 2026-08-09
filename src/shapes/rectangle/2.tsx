import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient98 from "../../gradients/gradient-98";

const data: ComponentDataType = {
  shape: <rect width="200" height="200" fill="#fff" rx="32" />,

  fill: "#0E6FFF",
  gradient: Gradient98,
};
const Component = createShapeComponent("rectangle-2", data);
export { data, Component as default };
