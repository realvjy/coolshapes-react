import React, { forwardRef, useEffect, useState } from "react";
import shapesData from "./shapes/data";
import ShapeBase from "./lib/shapeBase";
import { ComponentDataType, CoolshapeComponentProps } from "./lib/types";
import { getRandomShape } from "./lib/utils/shape";

const Coolshape = forwardRef<SVGSVGElement, CoolshapeComponentProps>(
  ({ random, index, type, unstyled, ...rest }, ref) => {
    const toDefault = unstyled || (!type && !index && !random);
    const [shapeId, setShapeId] = useState(
      toDefault ? "star-1" : `${type}-${index}`
    );
    useEffect(() => {
      if (random || (!index && type)) {
        const randomShape = getRandomShape({
          type,
        });
        setShapeId(randomShape.shapeId);
      }
    }, []);

    const ElementData: ComponentDataType = shapesData[shapeId];
    const InitialProps = toDefault ? { shape: ElementData.shape } : ElementData;

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
