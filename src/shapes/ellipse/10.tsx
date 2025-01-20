import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100zm55-151a4 4 0 00-4-4H49a4 4 0 00-4 4v102a4 4 0 004 4h102a4 4 0 004-4V49z"
      clipRule="evenodd"
    />
  ),
  blur: 40,
  gradientShapes: (
    <>
      <ellipse
        cx="155.777"
        cy="159.535"
        fill="#FF58E4"
        rx="91.994"
        ry="58.126"
        transform="rotate(-33.875 155.777 159.535)"></ellipse>
      <ellipse
        cx="58.482"
        cy="26.587"
        fill="#00F0FF"
        rx="69.531"
        ry="47.75"
        transform="rotate(-26.262 58.482 26.587)"></ellipse>
    </>
  ),

  fill: "url(#paint0_linear_748_4733)",
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
};
const Component = createShapeComponent("ellipse-10", data);
export { data, Component as default };
