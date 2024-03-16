import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle9: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-9";
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
            d="M118.01 77.99c3.32-3.32 4.981-4.98 5.881-6.964a11.994 11.994 0 001.073-5.128c-.03-2.178-.886-4.365-2.597-8.738L100 0 77.633 57.16c-1.711 4.373-2.567 6.56-2.597 8.737a12 12 0 001.073 5.13c.9 1.982 2.56 3.643 5.881 6.963l13.428 13.428c1.638 1.637 2.456 2.456 3.406 2.748a4.001 4.001 0 002.353 0c.949-.292 1.768-1.11 3.405-2.748L118.01 77.99zM118.01 122.01c3.32 3.32 4.981 4.981 5.881 6.964a11.991 11.991 0 011.073 5.128c-.03 2.178-.886 4.365-2.597 8.738L100 200l-22.367-57.16c-1.711-4.373-2.567-6.56-2.597-8.738a11.997 11.997 0 011.073-5.128c.9-1.983 2.56-3.644 5.881-6.964l13.428-13.428c1.638-1.637 2.456-2.456 3.406-2.748a3.998 3.998 0 012.353 0c.949.292 1.768 1.111 3.405 2.748l13.428 13.428zM200 100l-57.16 22.367c-4.373 1.711-6.56 2.567-8.738 2.597a11.991 11.991 0 01-5.128-1.073c-1.983-.9-3.644-2.561-6.964-5.881l-13.428-13.428c-1.637-1.637-2.456-2.456-2.748-3.405a3.998 3.998 0 010-2.353c.292-.95 1.111-1.768 2.748-3.406L122.01 81.99c3.32-3.32 4.981-4.98 6.964-5.881a11.997 11.997 0 015.128-1.073c2.178.03 4.365.886 8.738 2.597L200 100zM77.99 118.01c-3.32 3.32-4.98 4.981-6.964 5.881a11.994 11.994 0 01-5.128 1.073c-2.178-.03-4.365-.886-8.738-2.597L0 100l57.16-22.367c4.373-1.711 6.56-2.567 8.737-2.597a12 12 0 015.13 1.073c1.982.9 3.643 2.56 6.963 5.881l13.428 13.428c1.637 1.638 2.456 2.456 2.748 3.406a4.001 4.001 0 010 2.353c-.292.949-1.11 1.768-2.748 3.405L77.99 118.01z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#FFFDEA" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_radial_748_4914)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint1_radial_748_4914)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint2_radial_748_4914)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint3_radial_748_4914)"
            d="M200 0H0v200h200V0z"></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_748_4914"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(81.99998 6 -6 81.99998 11.5 100)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C5DF"></stop>
          <stop offset="1" stopColor="#0CE548" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_748_4914"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(73.352 43.022 75.99) scale(162.304)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF58E4"></stop>
          <stop offset="0.383" stopColor="#FF7776"></stop>
          <stop offset="1" stopColor="#FFE500" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint2_radial_748_4914"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-86.927 139.95 32.493) scale(74.6073)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.355" stopColor="#00F0FF"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint3_radial_748_4914"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-123.011 105.927 34.745) scale(93.6122)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle9.displayName = "Triangle9";
export { Triangle9 };
