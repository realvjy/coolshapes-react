import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon8: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-8";
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
            d="M170.71 170.711A100.001 100.001 0 01100 200v-99.775C99.877 127.736 77.54 150 50 150c-27.614 0-50-22.386-50-50s22.386-50 50-50c27.54 0 49.878 22.264 50 49.775V0a99.999 99.999 0 0170.71 170.711z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#907CFF" fillOpacity="0.6" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4488)">
            <path fill="#18A0FB" d="M212.25-20H100v139.75h112.25V-20z"></path>
            <path fill="#907CFF" d="M129.875 0H11v128.25h118.875V0z"></path>
            <path fill="#EE46D3" d="M84 75v142h136V75H84z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4488"
          width="369"
          height="397"
          x="-69"
          y="-100"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4488"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon8.displayName = "Moon8";
export { Moon8 };
