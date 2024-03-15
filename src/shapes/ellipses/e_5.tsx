import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse5: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-5";

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
            d="M200 33.333c0 18.41-14.924 33.334-33.333 33.334-18.41 0-33.334-14.924-33.334-33.334C133.333 14.923 148.257 0 166.667 0 185.076 0 200 14.924 200 33.333zM200 100c0 18.409-14.924 33.333-33.333 33.333-18.41 0-33.334-14.924-33.334-33.333 0-18.41 14.924-33.333 33.334-33.333C185.076 66.667 200 81.59 200 100zM200 166.667C200 185.076 185.076 200 166.667 200c-18.41 0-33.334-14.924-33.334-33.333 0-18.41 14.924-33.334 33.334-33.334 18.409 0 33.333 14.924 33.333 33.334zM133.333 33.333c0 18.41-14.924 33.334-33.333 33.334-18.41 0-33.333-14.924-33.333-33.334C66.667 14.923 81.59 0 100 0s33.333 14.924 33.333 33.333zM133.333 100c0 18.409-14.924 33.333-33.333 33.333-18.41 0-33.333-14.924-33.333-33.333 0-18.41 14.924-33.333 33.333-33.333S133.333 81.59 133.333 100zM133.333 166.667C133.333 185.076 118.409 200 100 200c-18.41 0-33.333-14.924-33.333-33.333 0-18.41 14.924-33.334 33.333-33.334s33.333 14.924 33.333 33.334zM66.667 33.333c0 18.41-14.924 33.334-33.334 33.334C14.923 66.667 0 51.743 0 33.333 0 14.923 14.924 0 33.333 0c18.41 0 33.334 14.924 33.334 33.333zM66.667 100c0 18.409-14.924 33.333-33.334 33.333C14.923 133.333 0 118.409 0 100c0-18.41 14.924-33.333 33.333-33.333 18.41 0 33.334 14.924 33.334 33.333zM66.667 166.667c0 18.409-14.924 33.333-33.334 33.333C14.923 200 0 185.076 0 166.667c0-18.41 14.924-33.334 33.333-33.334 18.41 0 33.334 14.924 33.334 33.334z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4769)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4769)">
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
          id="filter0_f_748_4769"
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
            result="effect1_foregroundBlur_748_4769"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4769"
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

Ellipse5.displayName = "Ellipse5";
export { Ellipse5 };
