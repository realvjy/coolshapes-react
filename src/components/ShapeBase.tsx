// shape base props
import React, { forwardRef } from "react";
import { ShapeProps } from "../lib";
import { ShapeMask } from "./ShapeMask";
import { Noise } from "./ShapeNoise";
import Outline from "./ShapeOutline";

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
    fillOpacity,
    blur,
    transparent,
    outline,
    outlineCap,
    outlineJoin,
    outlineColor,
    strokeOpacity,
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
      style={{
        overflow: outline ? "visible" : "initial",
      }}
      fillOpacity={strokeOpacity ? opacity : undefined}
      opacity={strokeOpacity ? undefined : opacity}
      {...rest}
      className={`${defaultClassName} ${shapeId} ${className || ""}`}>
      <ShapeMask
        shape={shape}
        noise={noise}
        blur={blur}
        fill={fill}
        shapeId={shapeId}
        fillOpacity={fillOpacity}
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
      {props.outline && (
        <Outline
          shape={shape}
          outline={outline as number}
          outlineColor={outlineColor}
          outlineJoin={outlineJoin}
          outlineCap={outlineCap}
          opacity={strokeOpacity}
        />
      )}
    </svg>
  );
});

ShapeBase.displayName = "ShapeBase";
export default ShapeBase;
