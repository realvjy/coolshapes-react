import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M100.503 101.907C107.74 125.692 129.849 143 156 143c15.184 0 29.006-5.835 39.345-15.385 1.138-1.051 3.017-.565 3.342.95A59.235 59.235 0 01200 141c0 32.585-26.415 59-59 59s-59-26.415-59-59c0-15.679 6.116-29.93 16.093-40.497C74.308 107.74 57 129.849 57 156c0 15.185 5.835 29.006 15.385 39.345 1.051 1.138.565 3.018-.95 3.343A59.236 59.236 0 0159 200c-32.585 0-59-26.415-59-59 0-32.584 26.415-59 59-59 15.68 0 29.93 6.117 40.497 16.093C92.26 74.308 70.15 57 43.999 57c-15.184 0-29.005 5.835-39.344 15.385-1.138 1.051-3.018.565-3.343-.95A59.234 59.234 0 010 59C0 26.415 26.415 0 59 0c32.584 0 59 26.415 59 59 0 15.68-6.117 29.93-16.093 40.497C125.692 92.26 143 70.151 143 44c0-15.185-5.835-29.006-15.385-39.345-1.051-1.138-.565-3.017.95-3.342A59.23 59.23 0 01141 0c32.585 0 59 26.415 59 59s-26.415 59-59 59c-15.68 0-29.93-6.116-40.497-16.093z",
  blur: undefined,
  gradientShapes: undefined,

  gradient: [
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(-135.99 120.877 57.303) scale(143.21)",
      type: "radial",
      stops: [
        { color: "#FF00D6", offset: 0 },
        { color: "#FF6CE7", offset: "0.423" },
        { color: "#fff", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(-45.616 231.53 74.976) scale(263.059)",
      type: "radial",
      stops: [
        { color: "#FF6C02", offset: 0 },
        { color: "#FFF500", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(46.063 -3.673 22.392) scale(209.693)",
      type: "radial",
      stops: [
        { color: "#07FFE1", offset: "0.276" },
        { color: "#FFF500", offset: "1", opacity: "0" },
      ],
    },
  ],
};
const Component = createShapeComponent("moon-12", data);
export { data, Component as default };
