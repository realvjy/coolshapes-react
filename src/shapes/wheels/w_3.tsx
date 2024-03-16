import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Wheel3: ShapeType = forwardRef((props, ref) => {
  const shapeId = "wheel-3";
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
            d="M110 0H90l6.39 91.284-60.03-69.066L22.218 36.36l69.066 60.03L0 90v20l91.284-6.39-69.066 60.03 14.142 14.142 60.03-69.066L90 200h20l-6.39-91.284 60.03 69.066 14.142-14.142-69.066-60.03L200 110V90l-91.284 6.39 69.066-60.03-14.142-14.142-60.03 69.066L110 0z"></path>
        </mask>
        <g mask={`url(#${maskId}`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4839)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4839)">
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
          id="filter0_f_748_4839"
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
            result="effect1_foregroundBlur_748_4839"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4839"
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

Wheel3.displayName = "Wheel3";
export { Wheel3 };
