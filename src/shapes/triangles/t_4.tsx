import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle4: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-4";
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
            d="M0 0a99.977 99.977 0 0029.273 70.71 100.027 100.027 0 0070.71 29.306V0H0zm99.984 100.016H200V0a100.028 100.028 0 00-70.735 29.292 99.976 99.976 0 00-29.281 70.724zm0 0V200H200a99.957 99.957 0 00-29.293-70.703 100.02 100.02 0 00-70.723-29.281zm0 0H0V200a100.017 100.017 0 0070.703-29.292 99.963 99.963 0 0029.28-70.692z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4949)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4949)">
            <ellipse
              cx="162.682"
              cy="0.587"
              fill="#FFD749"
              rx="83"
              ry="57"
              transform="rotate(-33.875 162.682 .587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4949"
          width="291.802"
          height="272.361"
          x="16.781"
          y="-135.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4949"
            stdDeviation="35"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4949"
          x1="38"
          x2="119"
          y1="14.5"
          y2="181.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#07FFE1"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle4.displayName = "Triangle4";
export { Triangle4 };
