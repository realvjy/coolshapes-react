import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M75.863 110H0V90h75.853L35.855 50l14.142-14.142L90 75.863V0h20v75.861l40.002-40.004L164.144 50l-39.998 40H200v20h-75.864l40.008 40.01-14.142 14.142L110 124.148V200H90v-75.853l-40.003 40.005-14.142-14.142L75.863 110z",
  blur: undefined,
  gradientShapes: undefined,

  gradient: [
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(116.694 71.023 87.946) scale(199.234)",
      type: "radial",
      stops: [
        { color: "#FFF500", offset: 0 },
        { color: "#FF00D6", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(48.452 -12.085 35.502) scale(223.143)",
      type: "radial",
      stops: [
        { color: "#FF00D6", offset: 0 },
        { color: "#FF7171", offset: "0.461", opacity: "0.84" },
        { color: "#FFF500", offset: "1", opacity: "0" },
      ],
    },
  ],
};
const Component = createShapeComponent("wheel-6", data);
export { data, Component as default };
