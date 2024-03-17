import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon1: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-1";
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
            d="M65 3c0-1.657-1.344-3.007-2.999-2.93a65 65 0 000 129.861C63.656 130.007 65 128.657 65 127V3zM197 65c1.657 0 3.007-1.344 2.931-2.999a64.989 64.989 0 00-18.969-42.963 64.995 64.995 0 00-70.836-14.09 64.992 64.992 0 00-35.178 35.178A64.998 64.998 0 0070.069 62C69.993 63.656 71.343 65 73 65h124zM135 197c0 1.657 1.344 3.007 2.999 2.931a64.983 64.983 0 0021.875-4.879 64.983 64.983 0 0035.178-35.178 64.989 64.989 0 000-49.748 64.98 64.98 0 00-35.178-35.178 64.993 64.993 0 00-21.875-4.879C136.344 69.993 135 71.343 135 73v124zM3 135c-1.657 0-3.007 1.344-2.93 2.999a64.994 64.994 0 0018.968 42.963A64.987 64.987 0 0065 200a64.992 64.992 0 0045.962-19.038 64.983 64.983 0 0014.09-21.088 64.983 64.983 0 004.879-21.875c.076-1.655-1.274-2.999-2.931-2.999H3z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFC700"
            fillOpacity="0.331"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4554)">
            <path
              fill="#FFC700"
              d="M206 82.875H53.25v120.75H206V82.875z"></path>
            <path fill="#1BC47D" d="M148 17H15v118h133V17z"></path>
            <path fill="#FF33D5" d="M222 16H117v152h105V16z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4554"
          width="332"
          height="312.625"
          x="-47.5"
          y="-46.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4554"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon1.displayName = "Moon1";
export { Moon1 };
