import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle5: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-5";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="184"
          x="0"
          y="8"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M54.42 55.018c15.258-26.783 22.887-40.175 32.976-44.454a32.263 32.263 0 0125.208 0c10.089 4.28 17.718 17.67 32.975 44.454l32.998 57.923c15.101 26.507 22.651 40.766 21.26 51.627-1.111 8.678-4.645 15.537-11.582 20.82C179.571 192 163.38 192 132.998 192H67.002c-30.382 0-46.573 0-55.256-6.612-6.938-5.283-10.472-12.142-11.583-20.82-1.39-10.861 6.16-25.12 21.26-51.627L54.42 55.018z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4943)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4943)">
            <path fill="#18A0FB" d="M135.366 3H-13v108h148.366V3z"></path>
            <path fill="#FF58E4" d="M196.58 109H-.55v116h197.13V109z"></path>
            <ellipse
              cx="85.159"
              cy="57.673"
              fill="#FFD749"
              rx="85.159"
              ry="57.673"
              transform="matrix(.83957 -.54325 .57155 .82057 54.44 63.525)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4943"
          width="370.649"
          height="346.593"
          x="-73"
          y="-61.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4943"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4943"
          x1="200"
          x2="0"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FFD600"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle5.displayName = "Triangle5";
export { Triangle5 };
