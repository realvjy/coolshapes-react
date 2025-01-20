import React, { forwardRef } from "react";
import { Noise, ShapeMask } from "./common";
import { ShapeProps } from "./types";

// shape base props
export const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  className: "coolshapes",
  viewBox: "0 0 200 200",
  width: "200",
  height: "200",
  noise: 0.3,
};

const ShapeBase = forwardRef<SVGSVGElement, ShapeProps>((props, ref) => {
  const {
    size,
    noise = true,
    shapeId,
    shape,
    className,
    fill,
    gradient,
    gradientShapes,
    opacity,
    blur,
    transparent,
    ...rest
  } = props;

  const {
    className: defaultClassName,
    width: defaultWidth,
    height: defaultHeight,
    noise: defaultNoise,
    ...restDefaultProps
  } = defaultProps;

  return (
    <svg
      ref={ref}
      {...restDefaultProps}
      width={size || defaultWidth}
      height={size || defaultHeight}
      {...rest}
      className={`${defaultClassName} ${shapeId} ${className || ""}`}>
      <ShapeMask
        shape={shape}
        noise={noise}
        blur={blur}
        fill={fill}
        shapeId={shapeId}
        opacity={opacity}
        gradient={gradient}
        gradientShapes={gradientShapes}
        transparent={transparent}
      />
      {noise && (
        <Noise
          shapeId={shapeId}
          noiseScale={typeof noise === "number" ? defaultNoise : undefined}
        />
      )}
    </svg>
  );
});

ShapeBase.displayName = "ShapeBase";
export default ShapeBase;
