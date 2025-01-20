import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M50 100c27.614 0 50-22.386 50-50 0 27.608 22.375 49.99 49.98 50-27.605.011-49.98 22.392-49.98 50 0-27.614-22.386-50-50-50S0 122.386 0 150v50h50c27.614 0 50-22.386 50-50 0 27.614 22.386 50 50 50h50v-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50V0h-50c-27.614 0-50 22.386-50 50 0-27.614-22.386-50-50-50H0v50c0 27.614 22.386 50 50 50z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#00F0FF" fillOpacity="0.85" d="M158 22H15v108h143V22z"></path>
      <path fill="#FF58E4" d="M209 101H52v116h157V101z"></path>
      <ellipse
        cx="156"
        cy="80"
        fill="#FFE500"
        fillOpacity="0.79"
        rx="83"
        ry="57"></ellipse>
    </>
  ),
  opacity: 0.44,
  fill: "#FFF9C5",
  gradient: [],
};
const Component = createShapeComponent("misc-1", data);
export { data, Component as default };
