import * as React from "react";
const Gradient2 = {
  gradient: [
    {
      x1: "162",
      x2: "49.5",
      y1: "38",
      y2: "150.5",
      type: "linear",
      opacity: "0.55",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FF58E4", offset: "1" },
      ],
    },
  ],
  shapes: (
    <>
      <path fill="#06F" d="M224 5H96v113h128V5z"></path>
      <path fill="#FF00D6" d="M99 72H0v97h99V72z"></path>
    </>
  ),
  blur: 35,
};
export { Gradient2, Gradient2 as default };
