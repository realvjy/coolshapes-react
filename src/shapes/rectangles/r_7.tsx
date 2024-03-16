import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Rectangle7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "rectangle-7";
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
            d="M128 28L100 0 72 28l28 28 28-28zM56 100L28 72 0 100l28 28 28-28z"></path>
          <path
            fill="#fff"
            d="M128 100l36 36-28 28-36-36-36 36-28-28 36-36-36-36 28-28 36 36 36-36 28 28-36 36z"></path>
          <path
            fill="#fff"
            d="M172 72l28 28-28 28-28-28 28-28zM128 172l-28-28-28 28 28 28 28-28z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_5073)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_5073)">
            <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
            <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
            <ellipse
              cx="153.682"
              cy="64.587"
              fill="#FFD749"
              rx="83"
              ry="57"
              transform="rotate(-33.875 153.682 64.587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_5073"
          width="361.583"
          height="346.593"
          x="-72"
          y="-61.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_5073"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_5073"
          x1="200"
          x2="0"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FFD600"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Rectangle7.displayName = "Rectangle7";
export { Rectangle7 };
