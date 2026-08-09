import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient65 from "../../gradients/gradient-65";

const data: ComponentDataType = {
  shape: (
    <>
      <path
        fill="#fff"
        d="M158 0c23.196 0 42 18.804 42 42v90h-64V64H68V0h90zM42 200c-23.196 0-42-18.804-42-42V68h64v68h68v64H42zM32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32z"></path>
      <path
        fill="#fff"
        d="M132 100c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32zM200 168c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32z"></path>
    </>
  ),
  gradient: Gradient65,
};
const Component = createShapeComponent("misc-2", data);
export { data, Component as default };
