import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M193.481 31.456c13.436 23.267 5.44 52.966-17.886 66.43l-1.522.88c-15.647 9.031-25.278 25.67-25.278 43.672v2.001c0 26.82-21.845 48.561-48.793 48.561s-48.794-21.741-48.794-48.561v-1.998c0-18.002-9.631-34.642-25.278-43.674l-1.525-.88C1.079 84.423-6.917 54.723 6.519 31.456 20.031 8.058 50.078.046 73.534 13.586l1.205.695a50.559 50.559 0 0050.522 0l1.205-.696c23.456-13.54 53.503-5.527 67.015 17.87z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="17.5" cy="80.5" fill="#FF00D6" rx="74.5" ry="49.5"></ellipse>
      <ellipse cx="157.5" cy="105" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#06F" d="M131 131H13v79h118v-79z"></path>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("flower-15", data);
export { data, Component as default };
