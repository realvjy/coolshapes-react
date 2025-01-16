import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.798c8.22 8.22 20.701 9.967 45.664 13.462L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.664z",
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
  shapeFill: "#FFF9C5",
  gradient: [],
};
const Component = createShapeComponent("star-1", data);
export { data, Component as default };
