import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M200 9V0H0v9c0 39.994 23.478 74.504 57.403 90.5C23.478 115.496 0 150.006 0 190v10h200v-10c0-39.994-23.478-74.504-57.403-90.5C176.522 83.504 200 48.994 200 9z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M120 41H15v119h105V41z"></path>
      <path fill="#FF28DD" d="M223.25-15H100v140.875h123.25V-15z"></path>
    </>
  ),

  gradient: [],
};
const Component = createShapeComponent("moon-3", data);
export { data, Component as default };
