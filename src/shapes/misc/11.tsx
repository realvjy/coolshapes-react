import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 100L100 0v70H0v60h100v70l100-100z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M193 97H23v103h170V97z"></path>
      <path fill="#FF37BB" d="M116 54H-41v92h157V54z"></path>
    </>
  ),
  opacity: 0,
  shapeFill: "#07FFE1",
  gradient: [],
};
const Component = createShapeComponent("misc-11", data);
export { data, Component as default };
