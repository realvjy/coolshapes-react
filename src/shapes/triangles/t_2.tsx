import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle2: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-2";
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
            d="M50.94 0L0 200h100L50.94 0zM100 200h100L150.967 0 100 200z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4968)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4968)">
            <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
            <path fill="#FF58E4" d="M212-20H111v133h101V-20z"></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M51 100h-85v120h85V100z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4968"
          width="406"
          height="400"
          x="-114"
          y="-100"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4968"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4968"
          x1="210"
          x2="52.5"
          y1="194.5"
          y2="0"
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

Triangle2.displayName = "Triangle2";
export { Triangle2 };
