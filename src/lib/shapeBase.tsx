import React, { forwardRef } from "react";
import { Noise, ShapeMask } from "./common";
import { ShapeProps } from "./types";

// shape base props
export const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  className: "coolshapes",
  viewBox: "0 0 200 200",
  width: 200,
  height: 200,
  noise: 0.3,
};

const ShapeBase = forwardRef<SVGSVGElement, ShapeProps>((props, ref) => {
  const {
    size,
    noise = true,
    shapeId,
    shape,
    className,
    shapeFill,
    gradient,
    gradientShapes,
    bg,
    background,
    backgroundOpacity,
    opacity,
    blur,
    outline,
    outlineLineJoin,
    outlineWidth,
    transparent,
    ...rest
  } = props;

  const {
    className: defaultClassName,
    width: defaultWidth,
    height: defaultHeight,
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
      {bg ||
        (background && (
          <path
            fill={bg || background}
            fillOpacity={backgroundOpacity || 1}
            d="M200 0H0v200h200V0z"
          />
        ))}
      <ShapeMask
        shape={shape}
        blur={blur}
        shapeFill={shapeFill}
        shapeId={shapeId}
        opacity={opacity}
        gradient={gradient}
        gradientShapes={gradientShapes}
        outline={outline}
        outlineLineJoin={outlineLineJoin}
        outlineWidth={outlineWidth}
        transparent={transparent}
      />
      {noise && (
        <Noise
          shapeId={shapeId}
          noiseScale={typeof noise === "number" ? noise : undefined}
        />
      )}
    </svg>
  );
});

ShapeBase.displayName = "ShapeBase";
export default ShapeBase;
