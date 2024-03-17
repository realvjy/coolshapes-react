import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon15: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-15";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="180"
          x="0"
          y="10"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M56.359 100C22.997 83.793 0 49.582 0 10h50c0 27.614 22.386 50 50 50s50-22.386 50-50h50c0 39.582-22.997 73.793-56.359 90C177.003 116.207 200 150.418 200 190h-50c0-27.614-22.386-50-50-50s-50 22.386-50 50H0c0-39.582 22.997-73.793 56.359-90z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFF500"
            fillOpacity="0.44"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4418)">
            <ellipse
              cx="106"
              cy="22.5"
              fill="#FF00D6"
              rx="88"
              ry="49.5"></ellipse>
            <ellipse
              cx="64.5"
              cy="155"
              fill="#07FFE1"
              rx="64.5"
              ry="45"></ellipse>
            <path fill="#06F" d="M218 126H100v120h118V126z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4418"
          width="378"
          height="433"
          x="-80"
          y="-107"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4418"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon15.displayName = "Moon15";
export { Moon15 };
