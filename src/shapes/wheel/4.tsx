import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path
        fill="#EE46D3"
        d="M125.125 32.625H14.375v133.25h110.75V32.625z"></path>
      <path fill="#18A0FB" d="M182.75 18.25H54.25v140h128.5v-140z"></path>
    </>
  ),
  opacity: 0.371,
  shapeFill: "#F2371F",
  gradient: [],
};
const Component = createShapeComponent("wheel-4", data);
export { data, Component as default };
