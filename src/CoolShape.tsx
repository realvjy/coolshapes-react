import React, { forwardRef, useEffect, useState } from "react";
import { shapesData } from "./shapes";
import ShapeBase from "./lib/shapeBase";
import { ShapeMetadataProps } from "./lib/types";
import { ComponentDataType, ShapesType } from "./shapes/types";
import { getRandomShape } from "./lib/utils/shape";

const Coolshape = forwardRef<
  SVGSVGElement,
  ShapeMetadataProps & { shapeId?: string } & {
    random?: boolean;
    index?: number;
    type?: ShapesType;
  }
>(({ random, index, type, ...rest }, ref) => {
  const [shapeId, setShapeId] = useState(`${type}-${index}`);
  useEffect(() => {
    if (random || !type || !index) {
      const randomShape = getRandomShape({
        type,
      });
      setShapeId(randomShape.shapeId);
    }
  }, []);

  const ElementData: ComponentDataType = shapesData[shapeId];

  if (ElementData) {
    return <ShapeBase ref={ref} {...ElementData} shapeId={shapeId} {...rest} />;
  } else {
    return null;
  }
});

Coolshape.displayName = "Coolshape";
export { Coolshape, Coolshape as CoolShape };
