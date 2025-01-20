import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M130 0c33.137 0 60 26.863 60 60v10c0 33.129-26.849 59.987-59.975 60H190v70H10v-70c0-33.125 26.844-59.98 59.965-60H10C10 31.34 41.34 0 80 0h50z",
  blur: undefined,
  gradientShapes: null,

  gradient: [
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(116.694 71.023 87.946) scale(199.234)",
      type: "radial",
      stops: [
        { color: "#FFF500", offset: 0 },
        { color: "#FF00D6", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(48.452 -12.085 35.502) scale(223.143)",
      type: "radial",
      stops: [
        { color: "#FF00D6", offset: 0 },
        { color: "#FF7171", offset: "0.461", opacity: "0.84" },
        { color: "#FFF500", offset: "1", opacity: "0" },
      ],
    },
  ],
};
const Component = createShapeComponent("number-2", data);
export { data, Component as default };
