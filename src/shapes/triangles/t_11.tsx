import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle11: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-11";
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
            fillRule="evenodd"
            d="M100 100L0 42v116l100-58zm0 0L158 0H42l58 100zm0 0l100-58v116l-100-58zm0 0l58 100H42l58-100z"
            clipRule="evenodd"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4895)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4895)">
            <path fill="#FF37BB" d="M174 34H26v175h148V34z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4895"
          width="308"
          height="335"
          x="-54"
          y="-46"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4895"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4895"
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

Triangle11.displayName = "Triangle11";
export { Triangle11 };
