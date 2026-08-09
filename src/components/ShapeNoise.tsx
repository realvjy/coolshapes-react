import React from "react";

export const Noise = ({
  shapeId,
  noiseScale = 0.3,
  seed = 4,
}: {
  shapeId: string;
  noiseScale?: number;
  seed?: number;
}) => (
  <>
    <defs>
      <filter
        id={`cs_${shapeId}_noise`}
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox">
        <feTurbulence
          baseFrequency={noiseScale}
          numOctaves={5}
          result="out1"
          seed={seed}
        />
        <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3" />
      </filter>
    </defs>
  </>
);

export default Noise;
