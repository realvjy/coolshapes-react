import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon2: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-2";
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
            d="M186.048 180.392c4.775-4.775 8.458-10.548 10.839-16.989 2.381-6.441 3.413-13.425 3.038-20.553-.375-7.127-2.151-14.258-5.225-20.987-3.074-6.728-7.387-12.922-12.692-18.227-5.305-5.305-11.498-9.618-18.227-12.692-6.728-3.074-13.86-4.85-20.987-5.225-7.128-.375-14.112.658-20.553 3.039-6.441 2.38-12.214 6.064-16.989 10.838l80.796 80.796zM13.952 19.607C9.177 24.38 5.494 30.154 3.113 36.596.733 43.035-.3 50.02.075 57.148c.375 7.127 2.15 14.26 5.225 20.988 3.074 6.728 7.387 12.922 12.692 18.227 5.305 5.305 11.498 9.618 18.227 12.692 6.728 3.074 13.86 4.849 20.987 5.224 7.128.375 14.111-.657 20.553-3.038 6.441-2.381 12.214-6.064 16.989-10.839L13.952 19.607zM19.608 186.048c4.774 4.774 10.547 8.457 16.988 10.838 6.442 2.381 13.426 3.414 20.553 3.038 7.127-.375 14.259-2.15 20.987-5.224 6.729-3.074 12.922-7.387 18.228-12.692 5.305-5.305 9.617-11.499 12.692-18.227 3.074-6.729 4.849-13.86 5.224-20.988.375-7.127-.657-14.111-3.038-20.552-2.381-6.442-6.064-12.214-10.839-16.989l-80.795 80.796zM180.39 13.952c-4.774-4.775-10.547-8.458-16.988-10.839C156.96.733 149.977-.3 142.849.075c-7.127.375-14.259 2.15-20.987 5.225-6.729 3.074-12.922 7.387-18.228 12.692-5.305 5.305-9.618 11.498-12.692 18.227-3.074 6.728-4.85 13.86-5.224 20.987-.375 7.128.657 14.112 3.038 20.553 2.381 6.441 6.064 12.214 10.839 16.989l80.795-80.796z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4545)">
            <path fill="#8F5BFF" d="M231 114H9v116h222V114z"></path>
            <ellipse
              cx="53.016"
              cy="0.222"
              fill="#00F0FF"
              rx="111.935"
              ry="76.871"
              transform="rotate(-15 53.016 .222)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4545"
          width="407.939"
          height="429.502"
          x="-116.939"
          y="-139.502"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4545"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon2.displayName = "Moon2";
export { Moon2 };
