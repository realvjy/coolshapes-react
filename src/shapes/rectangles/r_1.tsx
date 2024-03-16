import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Rectangle1: ShapeType = forwardRef((props, ref) => {
  const shapeId = "rectangle-1";
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
          <g clipPath={`url(#clip1_748_5130)`}>
            <path fill="#fff" d="M0 0H200V200H0z"></path>
          </g>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#FFF9C5" fillOpacity="0.2" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_5130)">
            <path
              fill="#00F0FF"
              fillOpacity="0.85"
              d="M154-14H11V94h143V-14z"></path>
            <ellipse
              cx="175"
              cy="69"
              fill="#FFE500"
              fillOpacity="0.79"
              rx="83"
              ry="57"></ellipse>
            <ellipse
              cx="24.5"
              cy="174"
              fill="#0E6FFF"
              rx="88.5"
              ry="61"></ellipse>
            <path fill="#FF58E4" d="M228 143H67v84h161v-84z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_5130"
          width="442"
          height="369"
          x="-124"
          y="-74"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_5130"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
        <clipPath id="clip1_748_5130">
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Rectangle1.displayName = "Rectangle1";
export { Rectangle1 };
