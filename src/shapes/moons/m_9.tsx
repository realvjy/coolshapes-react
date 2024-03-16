import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon9: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-9";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="201"
          height="200"
          x="-1"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M100 200a100.001 100.001 0 000-200v200zM0 200a100.002 100.002 0 00100-100A100 100 0 000 0v200z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4479)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4479)">
            <path fill="#FFE500" d="M180-41H-11v141h191V-41z"></path>
            <path fill="#18A0FB" d="M256 63H113v157h143V63z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4479"
          width="407"
          height="401"
          x="-81"
          y="-111"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4479"
            stdDeviation="35"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4479"
          x1="158.5"
          x2="29"
          y1="12.5"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6FFF"></stop>
          <stop offset="1" stopColor="#00F0FF"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon9.displayName = "Moon9";
export { Moon9 };
