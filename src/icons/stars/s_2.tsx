import React, { forwardRef } from "react";
import ShapeBase, { ShapeType } from "../../lib/iconBase";

const Star2: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "star-2";

  return (
    <ShapeBase iconName={ShapeId} ref={ref} {...props}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="190"
          x="0"
          y="5"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M100 5l27.194 67.642L200 77.573l-56 46.737L161.803 195 100 156.242 38.197 195 56 124.31 0 77.573l72.806-4.93L100 5z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_620_2150)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_620_2150)">
            <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
            <path
              fill="#0CE548"
              fillOpacity="0.35"
              d="M196 91H82v102h114V91z"></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M113 80H28v120h85V80z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_620_2150"
          width="278"
          height="310"
          x="-27"
          y="-55"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_620_2150"
            stdDeviation="27.5"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_620_2150"
          x1="186.5"
          x2="37"
          y1="37"
          y2="186.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
          <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
        </linearGradient>

        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Star2.displayName = "Star2";
export { Star2 };
