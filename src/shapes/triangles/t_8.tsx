import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle8: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-8";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="202"
          height="201"
          x="-1"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M200 100L100 0 0 100h100L0 200h200L100 100h100z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4918)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4918)">
            <path fill="#06F" d="M220 56H100v155h120V56z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4918"
          width="280"
          height="315"
          x="20"
          y="-24"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4918"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4918"
          x1="162"
          x2="49.5"
          y1="38"
          y2="150.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FF58E4"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle8.displayName = "Triangle8";
export { Triangle8 };
