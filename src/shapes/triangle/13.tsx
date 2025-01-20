import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M40 100v100L0 100 40 0v100zM100 0L40 100l60 100 60-100L100 0zM160 100v100l40-100L160 0v100z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M169 58H0v150h169V58z"></path>
      <path fill="#FF37BB" d="M200 56H0v88h200V56z"></path>
    </>
  ),

  fill: "#07FFE1",
  gradient: [],
};
const Component = createShapeComponent("triangle-13", data);
export { data, Component as default };
