import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M200 25c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM200 175c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM175 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM125 175c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM100 50c13.807 0 25-11.193 25-25S113.807 0 100 0 75 11.193 75 25s11.193 25 25 25zM50 175c0 13.807-11.193 25-25 25S0 188.807 0 175s11.193-25 25-25 25 11.193 25 25zM100 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25zM25 125c13.807 0 25-11.193 25-25S38.807 75 25 75 0 86.193 0 100s11.193 25 25 25z",
  blur: undefined,
  gradientShapes: null,

  fill: "#FFFDEA",
  gradient: [
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "matrix(81.99998 6 -6 81.99998 11.5 100)",
      type: "radial",
      stops: [
        { color: "#00C5DF", offset: 0 },
        { color: "#0CE548", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(73.352 43.022 75.99) scale(162.304)",
      type: "radial",
      stops: [
        { color: "#FF58E4", offset: 0 },
        { color: "#FF7776", offset: "0.383" },
        { color: "#FFE500", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(-86.927 139.95 32.493) scale(74.6073)",
      type: "radial",
      stops: [
        { color: "#00F0FF", offset: "0.355" },
        { color: "#FFD977", offset: "1", opacity: "0" },
      ],
    },
    {
      cx: "0",
      cy: "0",
      r: "1",
      gradientTransform: "rotate(-123.011 105.927 34.745) scale(93.6122)",
      type: "radial",
      stops: [
        { color: "#FFE500", offset: 0 },
        { color: "#FFE927", offset: "1", opacity: "0" },
      ],
    },
  ],
};
const Component = createShapeComponent("ellipse-6", data);
export { data, Component as default };
