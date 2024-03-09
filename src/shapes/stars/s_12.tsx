import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Star12: ShapeType = forwardRef((props, ref) => {
  const shapeId = "star-12";
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
            d="M100 200l-14.412-72.059L45 155l27.059-40.588L0 100l72.059-14.412L44.999 45l40.59 27.059L100 0l14.412 72.058L155 45l-27.059 40.588L200 100l-72.059 14.412L155 155l-40.588-27.059L100 200z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#FFE388" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4304)">
            <path fill="#F2371F" d="M177 33H95v134h82V33z"></path>
            <ellipse
              cx="110.5"
              cy="133.5"
              fill="#FF00D6"
              rx="35.5"
              ry="33.5"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4304"
          width="262"
          height="294"
          x="-5"
          y="-47"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4304"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Star12.displayName = "Star12";
export { Star12 };
