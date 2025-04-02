import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient39 from "../../gradients/gradient-39";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100zm55-151a4 4 0 00-4-4H49a4 4 0 00-4 4v102a4 4 0 004 4h102a4 4 0 004-4V49z"
      clipRule="evenodd"
    />
  ),

  fill: "url(#paint0_linear_748_4733)",
  gradient: Gradient39,
};
const Component = createShapeComponent("ellipse-10", data);
export { data, Component as default };
