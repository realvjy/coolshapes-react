import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M10 90h90v110h90V90c0-49.706-40.294-90-90-90H10v90z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="108.567"
        cy="90.71"
        fill="#FF00D6"
        rx="64.567"
        ry="44.696"></ellipse>
      <ellipse cx="100.5" cy="155" fill="#07FFE1" rx="39.5" ry="45"></ellipse>
      <path fill="#06F" d="M249 130H131v120h118V130z"></path>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("number-7", data);
export { data, Component as default };
