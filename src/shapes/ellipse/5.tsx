import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M200 33.333c0 18.41-14.924 33.334-33.333 33.334-18.41 0-33.334-14.924-33.334-33.334C133.333 14.923 148.257 0 166.667 0 185.076 0 200 14.924 200 33.333zM200 100c0 18.409-14.924 33.333-33.333 33.333-18.41 0-33.334-14.924-33.334-33.333 0-18.41 14.924-33.333 33.334-33.333C185.076 66.667 200 81.59 200 100zM200 166.667C200 185.076 185.076 200 166.667 200c-18.41 0-33.334-14.924-33.334-33.333 0-18.41 14.924-33.334 33.334-33.334 18.409 0 33.333 14.924 33.333 33.334zM133.333 33.333c0 18.41-14.924 33.334-33.333 33.334-18.41 0-33.333-14.924-33.333-33.334C66.667 14.923 81.59 0 100 0s33.333 14.924 33.333 33.333zM133.333 100c0 18.409-14.924 33.333-33.333 33.333-18.41 0-33.333-14.924-33.333-33.333 0-18.41 14.924-33.333 33.333-33.333S133.333 81.59 133.333 100zM133.333 166.667C133.333 185.076 118.409 200 100 200c-18.41 0-33.333-14.924-33.333-33.333 0-18.41 14.924-33.334 33.333-33.334s33.333 14.924 33.333 33.334zM66.667 33.333c0 18.41-14.924 33.334-33.334 33.334C14.923 66.667 0 51.743 0 33.333 0 14.923 14.924 0 33.333 0c18.41 0 33.334 14.924 33.334 33.333zM66.667 100c0 18.409-14.924 33.333-33.334 33.333C14.923 133.333 0 118.409 0 100c0-18.41 14.924-33.333 33.333-33.333 18.41 0 33.334 14.924 33.334 33.333zM66.667 166.667c0 18.409-14.924 33.333-33.334 33.333C14.923 200 0 185.076 0 166.667c0-18.41 14.924-33.334 33.333-33.334 18.41 0 33.334 14.924 33.334 33.334z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
      <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
      <ellipse
        cx="153.682"
        cy="64.587"
        fill="#FFD749"
        rx="83"
        ry="57"
        transform="rotate(-33.875 153.682 64.587)"></ellipse>
    </>
  ),

  gradient: [
    {
      x1: "200",
      x2: "0",
      y1: "0",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FFD600", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("ellipse-5", data);
export { data, Component as default };