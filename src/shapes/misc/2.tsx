import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

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
  blur: 27.5,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
      <path fill="#0CE548" fillOpacity="0.35" d="M196 91H82v102h114V91z"></path>
      <path fill="#FFE500" fillOpacity="0.74" d="M113 80H28v120h85V80z"></path>
    </>
  ),

  gradient: [
    {
      x1: "186.5",
      x2: "37",
      y1: "37",
      y2: "186.5",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0, opacity: "0.51" },
        { color: "#00F0FF", offset: "1", opacity: "0.59" },
      ],
    },
  ],
};
const Component = createShapeComponent("misc-2", data);
export { data, Component as default };
