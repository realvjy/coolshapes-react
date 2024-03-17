import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle13: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-13";
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
            d="M40 100v100L0 100 40 0v100zM100 0L40 100l60 100 60-100L100 0zM160 100v100l40-100L160 0v100z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4863)">
            <path fill="#FFE500" d="M169 58H0v150h169V58z"></path>
            <path fill="#FF37BB" d="M200 56H0v88h200V56z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4863"
          width="360"
          height="312"
          x="-80"
          y="-24"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4863"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle13.displayName = "Triangle13";
export { Triangle13 };
