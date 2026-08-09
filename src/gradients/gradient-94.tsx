import * as React from "react";
const Gradient94 = {
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
      <path fill="#00F0FF" d="M158 113H11v90h147v-90z"></path>
      <path fill="#18A0FB" d="M123 72H-20v108h143V72z"></path>
      <ellipse
        cx="62.382"
        cy="69.794"
        fill="#FFD749"
        rx="60.387"
        ry="39.91"
        transform="rotate(-33.875 62.382 69.794)"></ellipse>
    </>
  ),
  blur: 30,
};
export { Gradient94, Gradient94 as default };
