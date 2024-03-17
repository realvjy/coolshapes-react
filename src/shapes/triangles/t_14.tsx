import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle14: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-14";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="196"
          height="200"
          x="2"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M94.342 33.43c0-19.105 0-28.658-6.224-32.24C81.895-2.394 73.596 2.383 57 11.935l-11.998 6.906c-16.597 9.553-24.895 14.33-24.895 21.494 0 7.165 8.298 11.941 24.895 21.494L57 68.736c16.597 9.553 24.896 14.33 31.12 10.747 6.223-3.582 6.223-13.135 6.223-32.24V33.43zM39.343 71.6c-16.597-9.553-24.895-14.33-31.12-10.747C2 64.436 2 73.988 2 93.094v13.812c0 19.106 0 28.658 6.224 32.241 6.224 3.582 14.522-1.194 31.119-10.747l11.998-6.906c16.597-9.553 24.896-14.329 24.896-21.494 0-7.165-8.299-11.941-24.896-21.494L39.343 71.6zM45.001 138.17c-16.597 9.553-24.895 14.329-24.895 21.494 0 7.164 8.298 11.941 24.895 21.494L57 188.064c16.597 9.552 24.896 14.329 31.12 10.747 6.223-3.583 6.223-13.136 6.223-32.241v-13.812c0-19.106 0-28.659-6.224-32.241-6.223-3.582-14.522 1.194-31.119 10.747l-11.998 6.906zM105.658 166.569c0 19.106 0 28.659 6.224 32.241 6.224 3.583 14.522-1.194 31.119-10.747l11.998-6.905c16.597-9.553 24.895-14.33 24.895-21.494 0-7.165-8.298-11.941-24.895-21.494l-11.998-6.906c-16.597-9.553-24.895-14.329-31.119-10.747-6.224 3.582-6.224 13.135-6.224 32.241v13.811zM160.657 128.4c16.597 9.553 24.895 14.329 31.119 10.747C198 135.564 198 126.011 198 106.906V93.094c0-19.105 0-28.658-6.224-32.24-6.224-3.583-14.522 1.194-31.119 10.746l-11.998 6.906c-16.597 9.553-24.895 14.33-24.895 21.494 0 7.165 8.298 11.941 24.895 21.494l11.998 6.906zM154.999 61.83c16.597-9.553 24.895-14.329 24.895-21.494 0-7.164-8.298-11.94-24.895-21.494l-11.998-6.905c-16.597-9.553-24.895-14.33-31.119-10.747-6.224 3.582-6.224 13.135-6.224 32.24v13.812c0 19.106 0 28.659 6.224 32.241 6.224 3.582 14.522-1.194 31.119-10.747l11.998-6.906z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.13"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4873)">
            <ellipse
              cx="30.742"
              cy="171.544"
              fill="#FFC700"
              rx="79.5"
              ry="64.116"
              transform="rotate(-33.875 30.742 171.544)"></ellipse>
            <path fill="#06F" d="M232-15H121v121h111V-15z"></path>
            <ellipse cx="37" cy="55" fill="#07FFE1" rx="60" ry="45"></ellipse>
            <path fill="#FF37BB" d="M234 121H100v121h134V121z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4873"
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
            result="effect1_foregroundBlur_748_4873"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle14.displayName = "Triangle14";
export { Triangle14 };
