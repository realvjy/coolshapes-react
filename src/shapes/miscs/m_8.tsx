import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Misc8: ShapeType = forwardRef((props, ref) => {
  const shapeId = "misc-8";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="170"
          height="200"
          x="15"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M159.603 4.119c20.424 5.543 26.833 22.173 25.137 37.14-1.681 14.832-17.516 28.046-40.735 27.19 6.323.493 26.219 7.822 30.262 25.472 4.19 18.293-5.181 29.59-16.758 35.477-18.166 9.237-38.227 9.211-55.509 8.102 10.621 5.911 25.831 16.991 27.753 34.027 1.923 17.037-12.568 33.26-41.894 27.163-29.326-6.098-84.992-31.19-70.174-74.281 5.942-17.279 25.406-23.795 36.658-26.054 4.87-.977 19.376-3.326 39.8-3.326-24.487-2.356-62.526-14.412-64.413-41.575C25.956-.87 123.06-5.8 159.603 4.12z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_5008)"
            d="M200 0H0v200h200V0z"></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_748_5008"
          x1="38"
          x2="119"
          y1="14.5"
          y2="181.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#07FFE1"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Misc8.displayName = "Misc8";
export { Misc8 };
