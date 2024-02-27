import React, {
  ForwardRefExoticComponent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import shapes, { getRandomShape, shapeTypes } from "../icons";
import { ShapeProps } from "./iconBase";

export { default as NoiseMask } from "./noiseMask";
export { default as ShapeBase, ShapeType } from "./iconBase";

interface ShapeOptions extends ShapeProps {
  type?: (typeof shapeTypes)[number];
  shape: keyof typeof shapes;
  random?: boolean;
  size?: number;
  noise?: boolean;
}

const Coolshape: ForwardRefExoticComponent<ShapeOptions> = forwardRef(
  (options, ref) => {
    const { type, shape, random, ...rest } = options;
    const [shapeName, setShapeName] = useState<keyof typeof shapes>(shape);
    useEffect(() => {
      if (random || !shapeName) {
        const iconName = getRandomShape(type);
        setShapeName(iconName);
      }
    }, []);

    if (!shapeName) {
      return null;
    }
    const Shape = shapes[shapeName];
    return <Shape ref={ref} {...rest} />;
  }
);

Coolshape.displayName = "Coolshape";

export default Coolshape;
export { ShapeProps };
