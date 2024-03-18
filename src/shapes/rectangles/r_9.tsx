import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Rectangle9: ShapeType = forwardRef((props, ref) => {
  const shapeId = "rectangle-9";
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
            d="M100 139.678L39.678 200 0 160.322 60.322 100 0 39.678 39.678 0 100 60.322 160.322 0 200 39.678 139.678 100 200 160.322 160.322 200 100 139.678z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_844_2853)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_844_2853)">
            <path fill="#FF37BB" d="M95 46H-12v154H95V46z"></path>
            <path fill="#00F0FF" d="M212 0H79v110h133V0z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_844_2853"
          width="384"
          height="360"
          x="-92"
          y="-80"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_844_2853"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_844_2853"
          x1="158.5"
          x2="29"
          y1="12.5"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6FFF"></stop>
          <stop offset="1" stopColor="#0B9DFF"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Rectangle9.displayName = "Rectangle9";
export { Rectangle9 };
