import * as React from "react";
const Gradient70 = {
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
      <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
      <path fill="#00C5DF" d="M106-37H-33v150h139V-37z"></path>
      <ellipse
        cx="151.215"
        cy="65.167"
        fill="#FFD749"
        rx="94.157"
        ry="64.662"
        transform="rotate(-33.875 151.215 65.167)"></ellipse>
    </>
  ),
  blur: 30,
};
export { Gradient70, Gradient70 as default };
