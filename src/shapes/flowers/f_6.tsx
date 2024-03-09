import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower6: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-6";

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
            d="M124.486 75.514C167.877 77.436 200 84.874 200 100c0 15.126-32.123 22.564-75.514 24.486C122.564 167.877 115.126 200 100 200c-15.126 0-22.564-32.123-24.486-75.514C32.123 122.564 0 115.126 0 100c0-15.126 32.123-22.564 75.514-24.486C77.436 32.123 84.874 0 100 0c15.126 0 22.564 32.123 24.486 75.514z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4662)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4662)">
            <ellipse
              cx="141.365"
              cy="59.898"
              fill="#FFD749"
              rx="57.325"
              ry="57"
              transform="rotate(-33.875 141.365 59.898)"></ellipse>
            <path fill="#FF58E4" d="M179 36H79v76h100V36z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4662"
          width="259.596"
          height="254.214"
          x="9"
          y="-67.209"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4662"
            stdDeviation="35"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4662"
          x1="38"
          x2="119"
          y1="14.5"
          y2="181.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#07FFE1"></stop>
        </linearGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower6.displayName = "Flower6";
export { Flower6 };
