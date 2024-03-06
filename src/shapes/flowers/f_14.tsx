import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower14: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-14";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="194"
          x="0"
          y="3"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M60.87 29.427c14.184-35.236 64.076-35.236 78.26 0a25.028 25.028 0 0021.519 15.608c37.828 2.56 53.333 49.971 24.205 74.248a24.967 24.967 0 00-8.222 25.283c9.275 36.775-31.175 65.993-63.313 45.867a25.138 25.138 0 00-26.638 0c-32.138 20.126-72.587-9.092-63.313-45.867a24.967 24.967 0 00-8.221-25.283C-13.983 95.006 1.522 47.594 39.35 45.035A25.028 25.028 0 0060.87 29.427z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFF500"
            fillOpacity="0.44"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4584)">
            <ellipse
              cx="106"
              cy="22.5"
              fill="#FF00D6"
              rx="88"
              ry="49.5"></ellipse>
            <ellipse
              cx="55.5"
              cy="160"
              fill="#07FFE1"
              rx="64.5"
              ry="45"></ellipse>
            <path fill="#FFC700" d="M218 126H100v120h118V126z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4584"
          width="387"
          height="433"
          x="-89"
          y="-107"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4584"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower14.displayName = "Flower14";
export { Flower14 };
