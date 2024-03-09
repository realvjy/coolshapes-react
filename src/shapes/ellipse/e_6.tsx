import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse6: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-6";

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
            d="M200 25c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM200 175c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM175 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM125 175c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM100 50c13.807 0 25-11.193 25-25S113.807 0 100 0 75 11.193 75 25s11.193 25 25 25zM50 175c0 13.807-11.193 25-25 25S0 188.807 0 175s11.193-25 25-25 25 11.193 25 25zM100 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25zM25 125c13.807 0 25-11.193 25-25S38.807 75 25 75 0 86.193 0 100s11.193 25 25 25z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#FFFDEA" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_radial_748_4763)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint1_radial_748_4763)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint2_radial_748_4763)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint3_radial_748_4763)"
            d="M200 0H0v200h200V0z"></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_748_4763"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(81.99998 6 -6 81.99998 11.5 100)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C5DF"></stop>
          <stop offset="1" stopColor="#0CE548" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_748_4763"
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
          id="paint2_radial_748_4763"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-86.927 139.95 32.493) scale(74.6073)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.355" stopColor="#00F0FF"></stop>
          <stop offset="1" stopColor="#FFD977" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint3_radial_748_4763"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-123.011 105.927 34.745) scale(93.6122)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#FFE927" stopOpacity="0"></stop>
        </radialGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Ellipse6.displayName = "Ellipse6";
export { Ellipse6 };
