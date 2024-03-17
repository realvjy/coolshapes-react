import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle1: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-1";
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
            d="M-.028.003l100 100v-100h-100zm100 0l100 100v-100h-100zm100 100h-100l100 99.994v-99.994zm-100 0h-100l100 99.994v-99.994z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFF9C5"
            fillOpacity="0.44"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4979)">
            <path
              fill="#00F0FF"
              fillOpacity="0.85"
              d="M135-8H-8v108h143V-8z"></path>
            <path fill="#FF58E4" d="M227 115H123v116h104V115z"></path>
            <ellipse
              cx="157"
              cy="43"
              fill="#FFE500"
              fillOpacity="0.79"
              rx="83"
              ry="57"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4979"
          width="368"
          height="365"
          x="-68"
          y="-74"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4979"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle1.displayName = "Triangle1";
export { Triangle1 };
