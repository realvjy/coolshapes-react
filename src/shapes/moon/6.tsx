import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M155.71 170.711A100.003 100.003 0 0184.999 200v-99.629A69.999 69.999 0 0115 170V30a70 70 0 0169.999 69.629V0a100 100 0 0170.711 170.711z",
  blur: 25,
  gradientShapes: (
    <>
      <path fill="#FFC700" d="M197.75 48.25H38v107h159.75v-107z"></path>
      <path fill="#18A0FB" d="M116.125 9H-10v104h126.125V9z"></path>
      <path fill="#EE46D3" d="M208 100H51v119h157V100z"></path>
    </>
  ),
  opacity: 0.112,
  fill: "#FFC700",
  gradient: [],
};
const Component = createShapeComponent("moon-6", data);
export { data, Component as default };
