import React, { forwardRef, useEffect, useState } from "react";
import shapesData from "./shapes/data";
import ShapeBase from "./lib/shapeBase";
import { ComponentDataType, CoolshapeComponentProps } from "./lib/types";
import { getRandomShape } from "./lib/utils/shape";

const Coolshape = forwardRef<SVGSVGElement, CoolshapeComponentProps>(
  ({ random, index, type, name, unstyled, ...rest }, ref) => {
    const toDefault = unstyled || (!random && !(name || (type && index)));
    const [shapeId, setShapeId] = useState(
      toDefault
        ? "star-1"
        : name && !(type && index)
          ? name
          : `${type}-${index}`
    );
    useEffect(() => {
      if (random) {
        const randomShape = getRandomShape({
          type: type,
        });
        console.log(randomShape);
        setShapeId(randomShape.shapeId);
      }
    }, []);

    const ElementData: ComponentDataType = shapesData[shapeId];
    const InitialProps = toDefault ? { shape: ElementData.shape } : ElementData;
    if (rest.fill) {
      rest.gradient = [];
      rest.gradientShapes = [];
      rest.blur = 0;
    }

    if (InitialProps) {
      return (
        <ShapeBase ref={ref} {...InitialProps} shapeId={shapeId} {...rest} />
      );
    } else {
      return null;
    }
  }
);

Coolshape.displayName = "Coolshape";
export { Coolshape, Coolshape as CoolShape };
