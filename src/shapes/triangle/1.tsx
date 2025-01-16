import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M-.028.003l100 100v-100h-100zm100 0l100 100v-100h-100zm100 100h-100l100 99.994v-99.994zm-100 0h-100l100 99.994v-99.994z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#00F0FF" fillOpacity="0.85" d="M135-8H-8v108h143V-8z"></path>
      <path fill="#FF58E4" d="M227 115H123v116h104V115z"></path>
      <ellipse
        cx="157"
        cy="43"
        fill="#FFE500"
        fillOpacity="0.79"
        rx="83"
        ry="57"></ellipse>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF9C5",
  gradient: [],
};
const Component = createShapeComponent("triangle-1", data);
export { data, Component as default };
