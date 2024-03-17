import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon12: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-12";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="201"
          height="202"
          x="-1"
          y="-1"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M100.503 101.907C107.74 125.692 129.849 143 156 143c15.184 0 29.006-5.835 39.345-15.385 1.138-1.051 3.017-.565 3.342.95A59.235 59.235 0 01200 141c0 32.585-26.415 59-59 59s-59-26.415-59-59c0-15.679 6.116-29.93 16.093-40.497C74.308 107.74 57 129.849 57 156c0 15.185 5.835 29.006 15.385 39.345 1.051 1.138.565 3.018-.95 3.343A59.236 59.236 0 0159 200c-32.585 0-59-26.415-59-59 0-32.584 26.415-59 59-59 15.68 0 29.93 6.117 40.497 16.093C92.26 74.308 70.15 57 43.999 57c-15.184 0-29.005 5.835-39.344 15.385-1.138 1.051-3.018.565-3.343-.95A59.234 59.234 0 010 59C0 26.415 26.415 0 59 0c32.584 0 59 26.415 59 59 0 15.68-6.117 29.93-16.093 40.497C125.692 92.26 143 70.151 143 44c0-15.185-5.835-29.006-15.385-39.345-1.051-1.138-.565-3.017.95-3.342A59.23 59.23 0 01141 0c32.585 0 59 26.415 59 59s-26.415 59-59 59c-15.68 0-29.93-6.116-40.497-16.093z"
            clipRule="evenodd"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_radial_748_4454)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint1_radial_748_4454)"
            d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint2_radial_748_4454)"
            d="M200 0H0v200h200V0z"></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_748_4454"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-135.99 120.877 57.303) scale(143.21)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF00D6"></stop>
          <stop offset="0.423" stopColor="#FF6CE7"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_748_4454"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-45.616 231.53 74.976) scale(263.059)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6C02"></stop>
          <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint2_radial_748_4454"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(46.063 -3.673 22.392) scale(209.693)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.276" stopColor="#07FFE1"></stop>
          <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
        </radialGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon12.displayName = "Moon12";
export { Moon12 };
