import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100.397 0l87 50v100l-87 50-87-50V50l87-50z",
  blur: undefined,
  gradientShapes: undefined,

  gradient: [
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(-83.01 163.01 43.495) scale(184.874)",
      type: "radial",
      stops: [
        { color: "#F7C617", offset: 0 },
        { color: "#FFF500", offset: "1", opacity: "0" },
      ],
    },
  ],
};
const Component = createShapeComponent("polygon-8", data);
export { data, Component as default };
