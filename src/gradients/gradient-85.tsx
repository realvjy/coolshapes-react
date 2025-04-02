import * as React from "react";
const Gradient85 = {
  gradient: [
    {
      x1: "158.5",
      x2: "29",
      y1: "12.5",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
  shapes: (
    <>
      <path fill="#FF37BB" d="M174 34H26v175h148V34z"></path>
    </>
  ),
  blur: 40,
};
export { Gradient85, Gradient85 as default };
