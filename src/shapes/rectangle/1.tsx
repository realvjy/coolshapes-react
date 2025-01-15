import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "null",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#00F0FF" fillOpacity="0.85" d="M154-14H11V94h143V-14z"></path>
      <ellipse
        cx="175"
        cy="69"
        fill="#FFE500"
        fillOpacity="0.79"
        rx="83"
        ry="57"></ellipse>
      <ellipse cx="24.5" cy="174" fill="#0E6FFF" rx="88.5" ry="61"></ellipse>
      <path fill="#FF58E4" d="M228 143H67v84h161v-84z"></path>
    </>
  ),
  opacity: 0.2,
  shapeFill: "#FFF9C5",
  gradient: [],
};
const Component = createShapeComponent("rectangle-1", data);
export { data, Component as default };
