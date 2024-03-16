import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Polygon4: ShapeType = forwardRef((props, ref) => {
  const shapeId = "polygon-4";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M141.304 0l58.613 58.495.083 82.809-58.495 58.613-82.809.083L.083 141.505 0 58.696 58.495.083 141.304 0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4379)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4379)">
            <ellipse
              cx="162.682"
              cy="0.587"
              fill="#FFD749"
              rx="83"
              ry="57"
              transform="rotate(-33.875 162.682 .587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4379"
          width="291.802"
          height="272.361"
          x="16.781"
          y="-135.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4379"
            stdDeviation="35"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4379"
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

Polygon4.displayName = "Polygon4";
export { Polygon4 };
