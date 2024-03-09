import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower7: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-7";

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
            d="M100 0C86.193 0 75 11.193 75 25v14.29l-9.967-9.968c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.763-9.763 25.593 0 35.356L40 75H25C11.193 75 0 86.193 0 100s11.193 25 25 25h14l-9.744 9.744c-9.763 9.763-9.763 25.592 0 35.355 9.763 9.763 25.593 9.763 35.356 0L75 159.711V175c0 13.807 11.193 25 25 25s25-11.193 25-25v-15l10.744 10.744c9.763 9.763 25.592 9.763 35.355 0 9.763-9.763 9.763-25.593 0-35.356L160.711 125H175c13.807 0 25-11.193 25-25s-11.193-25-25-25h-15.289l10.967-10.967c9.763-9.763 9.763-25.592 0-35.355-9.763-9.763-25.593-9.763-35.356 0L125 39V25c0-13.807-11.193-25-25-25z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4652)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4652)">
            <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
            <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
            <ellipse
              cx="153.682"
              cy="64.587"
              fill="#FFD749"
              rx="83"
              ry="57"
              transform="rotate(-33.875 153.682 64.587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4652"
          width="361.583"
          height="346.593"
          x="-72"
          y="-61.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4652"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4652"
          x1="200"
          x2="0"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FFD600"></stop>
        </linearGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower7.displayName = "Flower7";
export { Flower7 };
