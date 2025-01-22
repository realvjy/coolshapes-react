import React, { forwardRef, useEffect, useState } from "react";
import shapesData from "./shapes/data";
import { ComponentDataType, CoolshapeComponentProps } from "./lib/types";
import { createShapeComponent, getRandomShape } from "./lib/utils/shape";

const Coolshape = forwardRef<SVGSVGElement, CoolshapeComponentProps>(
  ({ random, index, type, name, ...rest }, ref) => {
    const toDefault = !random && !(name || (type && index));
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
        setShapeId(randomShape.shapeId);
      }
    }, []);

    const ElementData: ComponentDataType = shapesData[shapeId];
    const Component = createShapeComponent(shapeId, ElementData);

    if (Component) {
      return <Component ref={ref} shapeId={shapeId} {...rest} />;
    } else {
      return null;
    }
  }
);

Coolshape.displayName = "Coolshape";
export { Coolshape, Coolshape as CoolShape };
