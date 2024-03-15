import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse11: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-11";

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
            d="M105 199.877c52.906-2.605 95-46.325 95-99.877 0-16.433-3.964-31.94-10.987-45.618-28.164 16.26-42.245 24.39-52.895 35.347a110.003 110.003 0 00-26.953 46.686C105 151.116 105 167.37 105 199.877zM95 199.877C42.094 197.272 0 153.552 0 100c0-16.433 3.964-31.94 10.988-45.618 28.163 16.26 42.245 24.39 52.894 35.347a110 110 0 0126.954 46.686C95 151.116 95 167.37 95 199.877zM15.995 45.726c28.161 16.259 42.241 24.388 57.06 28.132a110.002 110.002 0 0053.891 0c14.818-3.744 28.898-11.873 57.059-28.132C166.189 18.21 135.221 0 100 0S33.81 18.209 15.995 45.726z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.13"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4722)">
            <ellipse
              cx="30.742"
              cy="171.545"
              fill="#FFC700"
              rx="79.5"
              ry="64.116"
              transform="rotate(-33.875 30.742 171.545)"></ellipse>
            <path fill="#06F" d="M232-15H121v121h111V-15z"></path>
            <ellipse cx="37" cy="55" fill="#07FFE1" rx="60" ry="45"></ellipse>
            <path fill="#FF37BB" d="M234 121H100v121h134V121z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4722"
          width="438.331"
          height="417"
          x="-124.331"
          y="-95"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4722"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Ellipse11.displayName = "Ellipse11";
export { Ellipse11 };
