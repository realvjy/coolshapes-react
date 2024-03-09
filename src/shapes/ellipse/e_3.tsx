import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse3: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-3";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M200 30c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30zM200 170c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30zM151 100c0 28.167-22.833 51-51 51-28.166 0-51-22.833-51-51 0-28.166 22.834-51 51-51 28.167 0 51 22.834 51 51zM60 30c0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30zM60 170c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4788)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4788)">
            <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
            <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
            <ellipse
              cx="157.682"
              cy="43.587"
              fill="#FFD749"
              rx="83"
              ry="57"
              transform="rotate(-33.875 157.682 43.587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4788"
          width="365.583"
          height="367.594"
          x="-72"
          y="-82.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4788"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4788"
          x1="200"
          x2="0"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FFD600"></stop>
        </linearGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Ellipse3.displayName = "Ellipse3";
export { Ellipse3 };
