import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower8: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-8";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="160"
          height="200"
          x="20"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M180 40c0-22.091-35.817-40-80-40S20 17.909 20 40c0 11.947 10.475 22.67 27.084 30C30.474 77.33 20 88.053 20 100s10.475 22.671 27.084 30C30.474 137.329 20 148.053 20 160c0 22.091 35.817 40 80 40s80-17.909 80-40c0-11.947-10.475-22.671-27.084-30C169.525 122.671 180 111.947 180 100s-10.475-22.67-27.084-30C169.525 62.67 180 51.947 180 40z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4643)">
            <path fill="#8F5BFF" d="M222 126H0v108h222V126z"></path>
            <ellipse
              cx="100"
              cy="9.5"
              fill="#00F0FF"
              rx="100"
              ry="34.5"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4643"
          width="342"
          height="379"
          x="-59.999"
          y="-85"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4643"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower8.displayName = "Flower8";
export { Flower8 };
