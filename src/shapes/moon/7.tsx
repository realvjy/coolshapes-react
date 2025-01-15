import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M184.171 100c3.063 7.523 4.431 15.882 3.912 24.546-.953 15.898-8.183 31.523-20.098 43.439-11.916 11.915-27.541 19.145-43.439 20.098-8.664.519-17.023-.849-24.546-3.912L184.171 100zM100 15.829c-7.523-3.063-15.882-4.431-24.546-3.912-15.898.953-31.523 8.183-43.438 20.099C20.1 43.93 12.87 59.556 11.917 75.454c-.52 8.664.849 17.023 3.912 24.546L100 15.829z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="30.742"
        cy="164.545"
        fill="#FFC700"
        rx="79.5"
        ry="64.116"
        transform="rotate(-33.875 30.742 164.545)"></ellipse>
      <path fill="url(#paint0_linear_748_4498)" d="M224 0H66v108h158V0z"></path>
      <path fill="#FF37BB" d="M256 122H122v121h134V122z"></path>
    </>
  ),
  opacity: 0.19,
  shapeFill: "#FF6C02",
  gradient: [
    {
      x1: "191.215",
      x2: "124.877",
      y1: "6.75",
      y2: "118.812",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("moon-7", data);
export { data, Component as default };
