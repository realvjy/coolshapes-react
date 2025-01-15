import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M199.686.315C144.773 55.57 144.877 144.877 200 200c-55.123-55.123-144.432-55.229-199.686-.315C55.227 144.432 55.123 55.123 0 0c55.123 55.123 144.432 55.23 199.686.315z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="143.777"
        cy="159.535"
        fill="#FF58E4"
        rx="91.994"
        ry="58.126"
        transform="rotate(-33.875 143.777 159.535)"></ellipse>
      <ellipse
        cx="64.482"
        cy="49.587"
        fill="#00F0FF"
        rx="69.531"
        ry="47.75"
        transform="rotate(-26.262 64.482 49.587)"></ellipse>
    </>
  ),
  gradient: [
    {
      x1: "158.5",
      x2: "29",
      y1: "12.5",
      y2: "200",
      type: "linear",
      stops: [
        {
          color: "#0E6FFF",
          offset: 0,
        },
        {
          color: "#00F0FF",
          offset: "1",
        },
      ],
    },
  ],
};
const Component = createShapeComponent("star-9", data);
export { data, Component as default };
