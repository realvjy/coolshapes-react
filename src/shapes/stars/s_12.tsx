import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M100 200l-14.412-72.059L45 155l27.059-40.588L0 100l72.059-14.412L44.999 45l40.59 27.059L100 0l14.412 72.058L155 45l-27.059 40.588L200 100l-72.059 14.412L155 155l-40.588-27.059L100 200z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#F2371F" d="M177 33H95v134h82V33z"></path>
      <ellipse
        cx="110.5"
        cy="133.5"
        fill="#FF00D6"
        rx="35.5"
        ry="33.5"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#FFE388",
  gradient: [],
};

const Component = createShapeComponent("star-12", data);
export { data, Component };
