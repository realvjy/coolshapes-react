import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M150 50H50v100h100V50zM0 0v200h200V0H0z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#00F0FF" d="M183 82H50v110h133V82z"></path>
    </>
  ),
  opacity: 0,
  shapeFill: "#fff",
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
const Component = createShapeComponent("rectangle-8", data);
export { data, Component as default };
