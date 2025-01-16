import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M110 0H90l6.39 91.284-60.03-69.066L22.218 36.36l69.066 60.03L0 90v20l91.284-6.39-69.066 60.03 14.142 14.142 60.03-69.066L90 200h20l-6.39-91.284 60.03 69.066 14.142-14.142-69.066-60.03L200 110V90l-91.284 6.39 69.066-60.03-14.142-14.142-60.03 69.066L110 0z",
  blur: 30,
  gradientShapes: undefined,
  opacity: 0,
  shapeFill: "gray",
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
const Component = createShapeComponent("wheel-3", data);
export { data, Component as default };
