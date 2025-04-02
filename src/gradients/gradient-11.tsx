import * as React from "react";
const Gradient11 = {
  gradient: [
    {
      x1: "200",
      x2: "0",
      y1: "0",
      y2: "200",
      type: "linear",
      opacity: "0.55",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FFD600", offset: "1" },
      ],
    },
  ],
  shapes: (
    <>
      <path fill="#18A0FB" d="M115 9H-28v131h143V9z"></path>
      <path fill="#FF58E4" d="M190 100H0v116h190V100z"></path>
    </>
  ),
  blur: 30,
};
export { Gradient11, Gradient11 as default };
