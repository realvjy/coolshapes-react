import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100 0l100 100-100 100.001L0 100 100 0z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#EE46D3" d="M163.125 45.75H28.375v148.5h134.75V45.75z"></path>
      <path fill="#FFC700" d="M121.25 13.625H8V144.75h113.25V13.625z"></path>
      <path fill="#F2371F" d="M174.875 5h-120v146.375h120V5z"></path>
      <path fill="#FFC700" d="M164.25 43.125H20.625v112H164.25v-112z"></path>
      <path fill="#00C5DF" d="M200 85H61v105h139V85z"></path>
    </>
  ),

  fill: "#FFF2AF",
  gradient: [],
};
const Component = createShapeComponent("rectangle-3", data);
export { data, Component as default };
