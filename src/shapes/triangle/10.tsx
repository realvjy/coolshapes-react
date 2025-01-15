import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M100 13l100 174H0L100 13z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M160 0H39v89h121V0z"></path>
      <path fill="#FFE500" d="M158 115H41v105h117V115z"></path>
      <path
        fill="url(#paint0_linear_748_4905)"
        d="M156-9H45v121h111V-9z"></path>
    </>
  ),
  opacity: 0.19,
  shapeFill: "#FF6C02",
  gradient: [
    {
      x1: "132.967",
      x2: "48.334",
      y1: "-1.438",
      y2: "88.212",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("triangle-10", data);
export { data, Component as default };
