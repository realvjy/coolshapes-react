import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon4: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-4";
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
            d="M27 199.999c-17.334-27.301-27-62.937-27-100C0 62.937 9.666 27.301 27 0v199.999zM200 200a100.003 100.003 0 01-100-100A100.003 100.003 0 01200 0v200zM60.29 175.485C70.51 186.396 82.715 194.701 96 200V0C82.716 5.299 70.51 13.604 60.29 24.515 41.535 44.535 31 71.687 31 100c0 28.312 10.536 55.465 29.29 75.485z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4527)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4527)">
            <ellipse
              cx="117.708"
              cy="149.343"
              fill="#FF58E4"
              rx="92.722"
              ry="73.064"
              transform="rotate(-33.875 117.708 149.343)"></ellipse>
            <ellipse
              cx="68.482"
              cy="38.587"
              fill="#00F0FF"
              rx="69.531"
              ry="47.75"
              transform="rotate(-26.262 68.482 38.587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4527"
          width="362.189"
          height="403.182"
          x="-77.372"
          y="-94.144"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4527"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4527"
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

Moon4.displayName = "Moon4";
export { Moon4 };
