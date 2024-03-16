import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-7";
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
            d="M0 0l100 100L0 200h200L100 100 200.001 0H0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4926)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4926)">
            <ellipse
              cx="56.994"
              cy="-11.874"
              fill="#FF58E4"
              rx="91.994"
              ry="58.126"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4926"
          width="303.989"
          height="236.252"
          x="-95"
          y="-130"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4926"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4926"
          x1="100"
          x2="100"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#00F0FF"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle7.displayName = "Triangle7";
export { Triangle7 };
