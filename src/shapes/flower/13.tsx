import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M100 0C83.984 0 71 12.984 71 29v.988l-.698-.699c-11.326-11.325-29.687-11.325-41.013 0-11.325 11.325-11.325 29.687 0 41.013l.699.698H29C12.984 71 0 83.984 0 100s12.984 29 29 29h.988l-.699.698c-11.325 11.326-11.325 29.687 0 41.013 11.325 11.325 29.687 11.325 41.013 0l.698-.699V171c0 16.016 12.984 29 29 29s29-12.984 29-29v-.988l.699.699c11.325 11.325 29.686 11.325 41.012 0 11.325-11.326 11.325-29.687 0-41.012l-.699-.699H171c16.016 0 29-12.984 29-29s-12.984-29-29-29h-.988l.699-.698c11.325-11.326 11.325-29.688 0-41.013-11.326-11.325-29.687-11.325-41.012 0l-.699.699V29c0-16.016-12.984-29-29-29z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M173.25 72H61v139.75h112.25V72z"></path>
      <path fill="#07FFE1" d="M100 28H-56v128h156V28z"></path>
      <path
        fill="url(#paint0_linear_748_4594)"
        d="M100 28H-56v128h156V28z"></path>
      <path fill="#FF58E4" d="M289 28H147v177h142V28z"></path>
    </>
  ),
  opacity: 0.19,
  shapeFill: "#FF6C02",
  gradient: [
    {
      x1: "-26.36",
      x2: "18.998",
      y1: "37.28",
      y2: "151.253",
      type: "linear",
      stops: [
        { color: "#FFE500", offset: 0 },
        { color: "#07FFE1", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("flower-13", data);
export { data, Component as default };
